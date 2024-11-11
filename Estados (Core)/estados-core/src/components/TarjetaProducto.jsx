import React, { useState } from 'react';

const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStockInicial }) => {
  // Crear un estado para manejar el stock
  const [enStock, setEnStock] = useState(enStockInicial);

  // Función para manejar la compra, reduce el stock en 1
  const manejarCompra = () => {
    if (enStock > 0) {
      setEnStock(enStock - 1);
    }
  };

  return (
    <div className="card">
      <h2>{nombreProducto}</h2>
      <p>{`$${precio}`}</p>
      <p>{descripcion}</p>
      <p style={{ color: enStock > 0 ? 'green' : 'red' }}>
        {enStock > 0 ? `En Stock: ${enStock}` : 'Agotado'}
      </p>
      <button
        onClick={manejarCompra}
        disabled={enStock === 0}
        className={enStock > 0 ? 'btn-compra' : 'btn-compra-disabled'}
      >
        Comprar
      </button>
    </div>
  );
};

export default TarjetaProducto;