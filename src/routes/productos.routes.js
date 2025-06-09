import { Router } from 'express';
<<<<<<< HEAD
import {  obtenerProductos,actualizarProducto, eliminarProducto, obtenerProducto, registrarProducto } from '../controllers/productos.controller.js';
=======
import {  obtenerProductos, obtenerProducto } from '../controllers/productos.controller.js';
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

const router = Router();

// Ruta para obtener todos los productos
router.get('/productos', obtenerProductos);

// Ruta para obtener un produto por su ID
router.get('/producto/:id', obtenerProducto);

<<<<<<< HEAD
router.post('/registrarproductos', registrarProducto);

// Ruta para eliminar un producto por su ID
router.delete('/eliminarproducto/:id', eliminarProducto);

// Ruta para actualizar un producto por su ID
router.patch('/actualizarproducto/:id', actualizarProducto);


=======
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725
export default router;