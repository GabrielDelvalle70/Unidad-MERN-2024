import Playlist from '../models/playlist.model.js';


export const createPlaylist = async (req, res) => {
  const { name, songs } = req.body;


  const newPlaylist = new Playlist({
    name,
    songs
  });


  try {
    await newPlaylist.save();
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ message: 'Error creating playlist', error });
  }
};


export const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('songs');
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlists', error });
  }
};


export const getPlaylistById = async (req, res) => {
  const { id } = req.params;


  try {
    const playlist = await Playlist.findById(id).populate('songs');
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error });
  }
};


export const updatePlaylist = async (req, res) => {
  const { id } = req.params;
  const { name, songs } = req.body;


  try {
    const playlist = await Playlist.findByIdAndUpdate(id, { name, songs }, { new: true }).populate('songs');
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Error updating playlist', error });
  }
};


export const deletePlaylist = async (req, res) => {
  const { id } = req.params;


  try {
    const playlist = await Playlist.findByIdAndDelete(id);
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting playlist', error });
  }
};