import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Filter from './components/Filter';

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('Todas');

  // Agrega una nueva nota
  const addNote = (text, priority) => {
    const newNote = { text, priority };
    setNotes([...notes, newNote]);
  };

  // Elimina una nota
  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  // Filtra las notas según la prioridad
  const filteredNotes = filter === 'Todas'
    ? notes
    : notes.filter(note => note.priority === filter);

  return (
    <div className="container">
      <h1>Notas</h1>
      <NoteForm addNote={addNote} />
      <Filter setFilter={setFilter} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;