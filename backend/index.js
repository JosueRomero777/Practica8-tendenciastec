const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Simple request logger middleware: logs date, method and URL
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'postgres',
  database: process.env.PGDATABASE || 'maransa',
  port: process.env.PGPORT || 5432,
});

app.get('/api/procesos', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, actor, actividad, descripcion, evidencia FROM procesos ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los procesos' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
