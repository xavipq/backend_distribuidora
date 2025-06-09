import { Router } from 'express';
<<<<<<< HEAD
import { actualizarCategoria, eliminarCategoria, obtenerCategorias,registrarCategoria } from '../controllers/categorias.controller.js';
=======
import {  obtenerCategorias, registrarCategoria } from '../controllers/categorias.controller.js';
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

const router = Router();

// Ruta para obtener todos las categorias
router.get('/categorias', obtenerCategorias);

<<<<<<< HEAD
// Ruta para registrar las categorias
router.post('/registrarcategoria', registrarCategoria);

// Ruta para eliminar un categoria por su ID
router.delete('/eliminarcategoria/:id', eliminarCategoria);

router.patch('/actualizarcategoria/:id', actualizarCategoria);


=======
// Ruta para registrar las categorìas
router.post('/registrarcategoria', registrarCategoria);

>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725
export default router;