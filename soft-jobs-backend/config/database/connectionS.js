import pkg from "pg";
import "dotenv/config";
const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true
});

try {
  await pool.query("SELECT NOW()");
  console.log("Base de Datos conectada");
} catch (error) {
  console.log(error, "Error al conectar a la Base de Datos");
}