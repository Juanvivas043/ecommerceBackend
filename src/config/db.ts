import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Número máximo de clientes en el pool
  idleTimeoutMillis: 30000,
});

pool.on("error", (err: Error) => {
  console.error("Error inesperado en el cliente de la base de datos", err);
  process.exit(-1);
});

export default pool;
