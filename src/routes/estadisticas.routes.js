import { Router } from 'express';
import { 
  totalVentasPorDia,
  totalVentasPorMes,
  totalVentasPorAnio,
  VentasPorEmpleado,
  CantidadVentasPorEmpleado,
  TotalVentasPorEmpleado,
  VentasPorCleinte,
  Cantidaddecomprasporcliente,
  Cantidaddecomprasporclientemes,
  Productomasvendido,
  Productomasvendidoporvalor,
  VentasdeProductoPorMes,
  Analisisdeventaporcategoria,
  Anlisisdestock,
  StockporCategoria,
  AnalisisCombinadodeVenta,
  VentaPorCategoriaEmpleadoyMes,
  VentaPorClienteMes,
  PromedioDeVentasPorEmpleado,
  PromedioDeVentasPorEmpleadoyMes,
  ClientesQueCompranMasFrecuente,
  ClientesFracuentePorMes,
  ProductoMasCompradoPorCliente,
  CategoriaMasCompradoPorCliente,
  VentasPorDiaDeLaSemana,
  VentasPorCategoriaYDiaDeLaSemana,
  ProductoConMayorRotacion,
  CategoriaConMayorRotacion
} from '../controllers/estadisticas.controller.js';

const router = Router();

// Rutas para estadísticas de ventas
router.get('/totalventaspordia', totalVentasPorDia);
router.get('/totalventaspormes', totalVentasPorMes);
router.get('/totalventasporanio', totalVentasPorAnio);
router.get('/ventasporempleado', VentasPorEmpleado);
router.get('/cantidadventasporempleado', CantidadVentasPorEmpleado);
router.get('/totalventasporempleado', TotalVentasPorEmpleado);
router.get('/ventasporcliente', VentasPorCleinte);
router.get('/cantidadcomprasporcliente', Cantidaddecomprasporcliente);
router.get('/cantidadcomprasporclientemes', Cantidaddecomprasporclientemes);
router.get('/productomasvendido', Productomasvendido);
router.get('/productomasvendidoporvalor', Productomasvendidoporvalor);
router.get('/ventasproductopormes', VentasdeProductoPorMes);
router.get('/analisisventaporcategoria', Analisisdeventaporcategoria);
router.get('/analisisstock', Anlisisdestock);
router.get('/stockporcategoria', StockporCategoria);
router.get('/analisiscombinadoventa', AnalisisCombinadodeVenta);
router.get('/ventaporcategoriaempleadomes', VentaPorCategoriaEmpleadoyMes);
router.get('/ventaporclientemes', VentaPorClienteMes);
router.get('/promedioventasporempleado', PromedioDeVentasPorEmpleado);
router.get('/promedioventasporempleadomes', PromedioDeVentasPorEmpleadoyMes);
router.get('/clientesfrecuentes', ClientesQueCompranMasFrecuente);
router.get('/clientesfrecuentespormes', ClientesFracuentePorMes);
router.get('/productomascompradoporcliente', ProductoMasCompradoPorCliente);
router.get('/categoriamascompradaporcliente', CategoriaMasCompradoPorCliente);
router.get('/ventaspordiasemana', VentasPorDiaDeLaSemana);
router.get('/ventasporcategoriaydiasemana', VentasPorCategoriaYDiaDeLaSemana);
router.get('/productomayorrotacion', ProductoConMayorRotacion);
router.get('/categoriamayorrotacion', CategoriaConMayorRotacion);

export default router;