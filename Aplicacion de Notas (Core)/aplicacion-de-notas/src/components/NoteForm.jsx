import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Baja');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return; // No agregar si el texto está vacío
    addNote(text, priority);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu nota"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Agregar Nota</button>
    </form>
  );
}

export default NoteForm;