import React from 'react';

function Filter({ setFilter }) {
  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
    </div>
  );
}

export default Filter;