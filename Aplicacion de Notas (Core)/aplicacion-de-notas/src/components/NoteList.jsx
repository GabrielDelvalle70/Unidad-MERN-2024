import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          {note.text} - {note.priority}
          <button onClick={() => deleteNote(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;