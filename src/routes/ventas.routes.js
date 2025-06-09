import { Router } from 'express';
<<<<<<< HEAD
import { obtenerVentasConDetalles, obtenerVentas, eliminarVenta,actualizarVenta, registrarVenta} from '../controllers/ventas.controller.js';
=======
import { obtenerVentasConDetalles,  } from '../controllers/ventas.controller.js';
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

const router = Router();

// Ruta para obtener todos los clientes
router.get('/ventas', obtenerVentasConDetalles);

<<<<<<< HEAD
// Ruta para obtener todas las ventas
router.get('/obtenerventas', obtenerVentas);

// Ruta para eliminar una venta
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Ruta para registrar una nueva venta
router.post('/registrarventa', registrarVenta);

// Ruta para actualizar una venta
router.patch('/actualizarventa/:id_venta', actualizarVenta);


=======
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725


export default router;