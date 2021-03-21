import React from 'react';

const Producto = ({ producto, productos, carrito, agregarProducto }) => {
    // extraer los valores del objeto con destructuring
    const { nombre, precio, id } = producto;

    // Seleccionar productos
    const seleccionarProductos = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    // Eliminar productos
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //agregar el carrito al state
        agregarProducto(productos);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>C${precio}</p>
            {
                productos
                    ?
                    (
                        <button
                            type="button"
                            onClick={() => seleccionarProductos(id)}
                        >Comprar</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            onClick={ () => eliminarProducto(id) }
                        >Eliminar</button> 
                    )
            }
        </div>
    );
}

export default Producto;