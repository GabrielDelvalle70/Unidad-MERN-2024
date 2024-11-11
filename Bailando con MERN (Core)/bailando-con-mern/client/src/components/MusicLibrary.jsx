import { useState, useEffect } from 'react';
import axios from 'axios';

function MusicLibrary() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Songs</h2>
      <ul>
        {songs.map(song => (
          <li key={song._id}>
            {song.title} by {song.artist} ({song.genre})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicLibrary;