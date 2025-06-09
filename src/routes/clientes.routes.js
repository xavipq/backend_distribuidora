import { Router } from 'express';
<<<<<<< HEAD
import { obtenerClientes,eliminarCliente, actualizarCliente, obtenerCliente, registrarCliente } from '../controllers/clientes.controller.js';
=======
import {  obtenerClientes,  } from '../controllers/clientes.controller.js';
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

const router = Router();

// Ruta para obtener todos los clientes
router.get('/clientes', obtenerClientes);

<<<<<<< HEAD
// Ruta para obtener un cliente por ID
router.get('/clientes/:id', obtenerCliente);

// Ruta para registrar un nuevo cliente
router.post('/registrarcliente', registrarCliente);


// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcliente/:id', eliminarCliente);

// Ruta para actualizar un cliente por su ID
router.patch('/actualizarcliente/:id', actualizarCliente);
=======

>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

export default router;