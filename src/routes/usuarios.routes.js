import { Router } from 'express';
import { obtenerUsuarios, actualizarUsuario, eliminarUsuario, obtenerUsuario, registrarUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

// Ruta para obtener todos los usuarios.
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener un usuario por su ID.
router.get('/usuario/:user', obtenerUsuario);



router.post ('/registrarusuario', registrarUsuario)

// Ruta para eliminar un usuario por su ID
router.delete('/eliminarusuario/:id', eliminarUsuario);

// Ruta para actualizar un usuario por su ID
router.patch('/actualizarusuario/:id', actualizarUsuario);


export default router;