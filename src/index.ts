import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import pool from "./config/db";
import productRoutes from "./routes/productRoutes";

const app = express();
const port = 3000;

// Middleware necesario para que Express entienda el JSON que le enviemos en el body
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "secreto_por_defecto";

// Ruta 1: Test de Base de Datos
app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "¡Conectado con TypeScript y Postgres!",
      db_time: result.rows[0].now,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error conectando a la base de datos externa" });
  }
});

// Ruta 2: Test de JWT
app.post("/login", (req: Request, res: Response) => {
  // En la vida real, aquí verificarías el email/password contra la base de datos.
  // Por ahora, simulamos un usuario que se loguea exitosamente:
  const payload = {
    userId: 1,
    role: "admin",
  };

  // Generamos el token que expira en 2 horas
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

  res.json({
    message: "Login exitoso",
    token: token,
  });
});

// Rutas de la API de E-commerce
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`API con TS y JWT corriendo en el puerto ${port}`);
});

