import { useState } from 'react'
import './App.css'
import React from 'react';
import TarjetaProducto from './components/TarjetaProducto';

const App = () => {
  return (
    <div className="App">
      <h1>TechStore - Tu Destino para la Mejor Tecnología</h1>
      <div className="productos">
        <TarjetaProducto
          nombreProducto="Laptop"
          precio={1500}
          descripcion="Una potente laptop para trabajar y jugar."
          enStockInicial={10}
        />
        <TarjetaProducto
          nombreProducto="Smartphone"
          precio={800}
          descripcion="Un smartphone de última generación con una de las mejores cámaras."
          enStockInicial={0}
        />
        <TarjetaProducto
          nombreProducto="Auriculares"
          precio={200}
          descripcion="Auriculares con cancelación de ruido. No escucharás nada a tu alrededor."
          enStockInicial={5}
        />
        <TarjetaProducto
          nombreProducto="Monitor"
          precio={300}
          descripcion="Monitor 4K para una experiencia visual increíble."
          enStockInicial={7}
        />
      </div>
    </div>
  );
};

export default App;