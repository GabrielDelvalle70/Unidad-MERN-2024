import { useState, useEffect } from 'react';
import axios from 'axios';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  useEffect(() => {
    axios.get('http://localhost:5000/api/playlists')
      .then(response => setPlaylists(response.data))
      .catch(error => console.error(error));
  }, []);

   // Filtra playlists basado en el término de búsqueda
  const filteredPlaylists = playlists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Playlists</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Search for playlists..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', marginBottom: '20px', padding: '8px' }}
      />

      {/* Lista de playlists filtradas */}
      <div>
        {filteredPlaylists.map(playlist => (
          <div key={playlist._id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <h3>{playlist.name}</h3>
            <p>{playlist.songs.length} songs</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlists;