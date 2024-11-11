import { useState, useEffect } from 'react';
import axios from 'axios';

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState('');
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda


  // Obtiene las canciones disponibles desde el backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error(error));
  }, []);

  // Maneja el cambio de selección de canciones
  const handleSongSelect = (songId) => {
    if (selectedSongs.includes(songId)) {
      setSelectedSongs(selectedSongs.filter(id => id !== songId));
    } else {
      setSelectedSongs([...selectedSongs, songId]);
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlaylist = {
      name: playlistName,
      songs: selectedSongs
    };

    axios.post('http://localhost:5000/api/playlists', newPlaylist)
      .then(() => {
        alert('Playlist created!');
        setPlaylistName('');
        setSelectedSongs([]);
      })
      .catch(error => console.error(error));
  };

  // Filtra canciones basado en el término de búsqueda
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Create New Playlist</h2>
      
      {/* Formulario de creación de playlist */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Playlist Name:
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              required
              style={{ width: '100%', marginBottom: '20px', padding: '8px' }}
            />
          </label>
        </div>

        <h3>Choose Songs</h3>

         {/* Campo de búsqueda */}
        <input
          type="text"
          placeholder="Search for songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />

         {/* Lista filtrada de canciones */}
        <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
          {filteredSongs.map(song => (
            <div key={song._id} style={{ marginBottom: '10px' }}>
              <input
                type="checkbox"
                id={song._id}
                checked={selectedSongs.includes(song._id)}
                onChange={() => handleSongSelect(song._id)}
              />
              <label htmlFor={song._id} style={{ marginLeft: '8px' }}>
                {song.title} - {song.artist}
              </label>
            </div>
          ))}
        </div>

        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Create Playlist
        </button>
      </form>
    </div>
  );
}

export default AddPlaylist;