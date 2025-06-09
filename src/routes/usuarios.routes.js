import { Router } from 'express';
<<<<<<< HEAD
import { obtenerUsuarios, actualizarUsuario, eliminarUsuario, obtenerUsuario, registrarUsuario } from '../controllers/usuarios.controller.js';
=======
import { obtenerUsuarios, obtenerUsuario, verificarUsuario } from '../controllers/usuarios.controller.js';
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

const router = Router();

// Ruta para obtener todos los usuarios.
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener un usuario por su ID.
router.get('/usuario/:user', obtenerUsuario);

<<<<<<< HEAD


router.post ('/registrarusuario', registrarUsuario)

// Ruta para eliminar un usuario por su ID
router.delete('/eliminarusuario/:id', eliminarUsuario);

// Ruta para actualizar un usuario por su ID
router.patch('/actualizarusuario/:id', actualizarUsuario);

=======
// Ruta para verificar un usuario y contraseña.
router.post('/verificar', verificarUsuario);
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

export default router;