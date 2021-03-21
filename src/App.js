import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // state de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'camisa React', precio: 50 },
    { id: 2, nombre: 'camisa Vue', precio: 40 },
    { id: 3, nombre: 'camisa Angular', precio: 40 },
    { id: 4, nombre: 'camisa Svelte', precio: 30 }
  ]);

  // state para guardar carrito
  const [carrito, agregarProducto] = useState([]);

  // obtener la fecha 
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo="Tienda virtual"
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
         />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
       />
      <Footer
        fecha={fecha}
      />
  </Fragment>
  );
}

export default App;
