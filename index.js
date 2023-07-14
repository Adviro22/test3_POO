// index.js
import express from 'express';
import { connectDB } from './db.js';
import authRoutes from './ruteadores/authRoutes.js';

const app = express();
const port = 3000;

// Conexión a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/', authRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});