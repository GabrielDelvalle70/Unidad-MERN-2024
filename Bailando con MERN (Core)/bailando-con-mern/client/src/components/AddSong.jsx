import { useState } from 'react';
import axios from 'axios';

function AddSong() {
  const [formData, setFormData] = useState({
    title: '', artist: '', genre: '', album: ''
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/songs', formData)
      .then(() => alert('Song added!'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:<input type="text" name="title" onChange={handleChange} /></label>
      <label>Artist:<input type="text" name="artist" onChange={handleChange} /></label>
      <label>Genre:<input type="text" name="genre" onChange={handleChange} /></label>
      <label>Album:<input type="text" name="album" onChange={handleChange} /></label>
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSong;