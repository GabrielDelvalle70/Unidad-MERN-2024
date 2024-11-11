import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Songs</Link>
      <Link to="/playlists">Playlists</Link>
      <Link to="/add-song">Add Song</Link>
      <Link to="/add-playlist">Add Playlist</Link>
    </nav>
  );
}

export default Header;