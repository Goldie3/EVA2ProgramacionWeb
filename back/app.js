const express = require('express')
const db = require('./db'); // Archivo de configuración
const app = express()
const port = 3000
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Adios mundo!')
})

app.get('/persona',  async (req, res) => {
  try {
    const [rows] =  await db.query('SELECT * FROM persona');
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.post('/persona', async (req, res) => {
  const { nombre, apellido, edad } = req.body; // Extraemos los datos del cuerpo de la petición
  // Validación básica
  if (!nombre || !apellido || !edad) {
    return res.status(400).json({ error: 'Nombre y email son obligatorios' });
  }
  try {
    // Usamos "?" como placeholders para prevenir inyección SQL
    const query = 'INSERT INTO persona (nombre, apellido, edad) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [nombre, apellido, edad]);
    res.status(201).json({
      mensaje: 'Usuario guardado con éxito',
      id: result.insertId // Retornamos el ID generado en la DB
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})