import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicLibrary from './components/MusicLibrary';
import Playlists from './components/Playlists';
import AddSong from './components/AddSong';
import AddPlaylist from './components/AddPlaylist';
import Header from './components/Header';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MusicLibrary />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/add-playlist" element={<AddPlaylist />} />
      </Routes>
    </Router>
  );
}

export default App;