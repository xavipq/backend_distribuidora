import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
export const DB_HOST = process.env.DB_HOST = 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'xavi';
export const DB_DATABASE = process.env.DB_DATABASE || 'ferreteria_bd';


export const PORT2 = process.env.PORT2 || 3000;
export const DB_HOST2 = process.env.DB_HOST2 || 'localhost';
export const DB_PORT2 = process.env.DB_PORT2 || 3306;
export const DB_USER2 = process.env.DB_USER2 || 'root';
export const DB_PASSWORD2 = process.env.DB_PASSWORD2 || 'xavi';
export const DB_DATABASE2 = process.env.DB_DATABASE2 || 'ferreteria_selva_datamart';
=======
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'xavi';
export const DB_DATABASE = process.env.DB_DATABASE || 'distribuidora_bd';
>>>>>>> d29e664a0a0c9667128772e1a5df7099ce98c725

//export const PORT = process.env.PORT;
//export const DB_HOST = process.env.DB_HOST;
//export const DB_PORT = process.env.DB_PORT;
//export const DB_USER = process.env.DB_USER;
//export const DB_PASSWORD = process.env.DB_PASSWORD;
//export const DB_DATABASE = process.env.DB_DATABASE;