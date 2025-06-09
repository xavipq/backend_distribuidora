import { pool } from '../db.js';

<<<<<<< HEAD
// Obtener todas los usuarios
export const obtenerUsuarios = async (req, res) => {
=======
// Obtener todos los usuarios
export const obtenerUsuarios= async (req, res) => {
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725
  try {
    const [result] = await pool.query('SELECT * FROM Usuarios');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los usuarios.',
      error: error
    });
  }
};

<<<<<<< HEAD
// Obtener un usuario por su id
export const obtenerUsuario = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Usuarios WHERE id_usuario = ?', [req.params.id]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El ID ${req.params.id} del usuario no encontrado.`
=======
// Obtener un usuario por su ID
export const obtenerUsuario = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Usuarios WHERE usuario = ?', [req.params.user]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El usuario ${req.params.user} no fue encontrado.`
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos del usuario.'
    });
  }
};

<<<<<<< HEAD
// Registrar un nuevo usuario
export const registrarUsuario = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;

    const [result] = await pool.query(
      'INSERT INTO Usuarios (usuario, contraseña) VALUES (?, ?)',
      [usuario, contraseña]
    );

    res.status(201).json({ 
      id_usuario: result.insertId,
      usuario,
      contraseña 
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el usuario.',
      error: error
    });
  }
};

// Eliminar un usuario por su ID
export const eliminarUsuario = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM Usuarios WHERE id_usuario = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar el usuario. El ID ${req.params.id} no fue encontrado.`
      });
    }

    res.status(204).send(); // Respuesta sin contenido para indicar éxito
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el usuario.',
      error: error
    });
  }
};

// Actualizar un usuario por su ID (parcialmente o completamente)
export const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const [resultado] = await pool.query(
      'UPDATE Usuarios SET ? WHERE id_usuario = ?',
      [datos, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `El usuario con ID ${id} no existe.`,
      });
    }

    res.status(204).send(); // Respuesta sin contenido para indicar éxito
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Error al actualizar el usuario.',
      error: error,
    });
=======
// Verificar si un usuario existe
export const verificarUsuario = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    const [result] = await pool.query(
      'SELECT * FROM Usuarios WHERE usuario = ? AND contraseña = ?',
      [usuario, contraseña]
    );
    res.json(result.length > 0); // Devuelve true o false directamente
  } catch (error) {
    res.status(500).json(false);
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725
  }
};