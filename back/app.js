const express = require('express')
const db = require('./db'); // Archivo de configuración
const app = express()
const port = 3000
app.use(express.json());



app.get('/campanias', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM campanias_marketing');
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.get('/campanias/:id', async (req, res) => {
  try {
    var id = req.params.id; // Obtenemos el ID de la URL
    const query = 'SELECT * FROM campanias_marketing WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    if (!rows[0]) {
      return res.status(404).json({ error: 'Campaña no encontrada' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/campanias', async (req, res) => {
  const { nombre, canal, presupuesto, fecha_inicio, fecha_fin, objetivo, activa } = req.body; // Extraemos los datos del cuerpo de la petición
  // Validación básica
  if (!nombre || !canal || !presupuesto || !fecha_inicio || !fecha_fin || !objetivo || activa === undefined) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    // Usamos "?" como placeholders para prevenir inyección SQL
    const query = 'INSERT INTO campanias_marketing (nombre, canal, presupuesto, fecha_inicio, fecha_fin, objetivo, activa) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [nombre, canal, presupuesto, fecha_inicio, fecha_fin, objetivo, activa]);
    res.status(201).json({
      mensaje: 'Campaña guardada con éxito',
      id: result.insertId // Retornamos el ID generado en la DB
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.put('/campanias/:id', async (req, res) => {
  const { nombre, canal, presupuesto, fecha_inicio, fecha_fin, objetivo, activa } = req.body; // Extraemos los datos del cuerpo de la petición
  const id = req.params.id; // Obtenemos el ID de la URL
  // Validación básica
  if (!nombre || !canal || !presupuesto || !fecha_inicio || !fecha_fin || !objetivo || activa === undefined) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    // Usamos "?" como placeholders para prevenir inyección SQL
    const query = 'UPDATE campanias_marketing SET nombre = ?, canal = ?, presupuesto = ?, fecha_inicio = ?, fecha_fin = ?, objetivo = ?, activa = ? WHERE id = ?';
    const [result] = await db.query(query, [nombre, canal, presupuesto, fecha_inicio, fecha_fin, objetivo, activa, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Campaña no encontrada' });
    }
    res.status(200).json({
      mensaje: 'Campaña actualizada con éxito',
      id: result.insertId // Retornamos el ID generado en la DB
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.delete('/campanias/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const query = 'DELETE FROM campanias_marketing WHERE id = ?';
    const [result] = await db.query(query, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Campaña no encontrada' });
    }
    res.status(200).json({
      mensaje: 'Campaña eliminada con éxito',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar en la base de datos' });
  }
});

// endpoints para tabla habitaciones_hostal

app.get('/habitaciones', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM habitaciones_hostal');
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/habitaciones/:id', async (req, res) => {
  try {
    var id = req.params.id; // Obtenemos el ID de la URL
    const query = 'SELECT * FROM habitaciones_hostal WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    if (!rows[0]) {
      return res.status(404).json({ error: 'Habitación no encontrada' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/habitaciones', async (req, res) => {
  const { codigo, tipo, capacidad, precio_noche, vista, disponible } = req.body; // Extraemos los datos del cuerpo de la petición
  // Validación básica
  if (!codigo || !tipo || !capacidad || !precio_noche || !vista || disponible === undefined) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    // Usamos "?" como placeholders para prevenir inyección SQL
    const query = 'INSERT INTO habitaciones_hostal (codigo, tipo, capacidad, precio_noche, vista, disponible) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [codigo, tipo, capacidad, precio_noche, vista, disponible]);
    res.status(201).json({
      mensaje: 'Habitación guardada con éxito',
      id: result.insertId // Retornamos el ID generado en la DB
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.put('/habitaciones/:id', async (req, res) => {
  const { codigo, tipo, capacidad, precio_noche, vista, disponible } = req.body; // Extraemos los datos del cuerpo de la petición
  const id = req.params.id; // Obtenemos el ID de la URL
  // Validación básica
  if (!codigo || !tipo || !capacidad || !precio_noche || !vista || disponible === undefined) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    // Usamos "?" como placeholders para prevenir inyección SQL
    const query = 'UPDATE habitaciones_hostal SET codigo = ?, tipo = ?, capacidad = ?, precio_noche = ?, vista = ?, disponible = ? WHERE id = ?';
    const [result] = await db.query(query, [codigo, tipo, capacidad, precio_noche, vista, disponible, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Habitación no encontrada' });
    }
    res.status(200).json({
      mensaje: 'Habitación actualizada con éxito',
      id: result.insertId // Retornamos el ID generado en la DB
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.delete('/habitaciones/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const query = 'DELETE FROM habitaciones_hostal WHERE id = ?';
    const [result] = await db.query(query, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Habitación no encontrada' });
    }
    res.status(200).json({
      mensaje: 'Habitación eliminada con éxito',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar en la base de datos' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})