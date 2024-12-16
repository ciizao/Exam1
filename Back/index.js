const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database'); // Archivo de configuración de la base de datos

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas de la API
// 1. Obtener todos los estudiantes
app.get('/estudiantes', (req, res) => {
  const sql = 'SELECT * FROM estudiantes';
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al obtener los datos');
    }
    res.json(results);
  });
});

// 2. Obtener un estudiante por ID
app.get('/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM estudiantes WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al obtener el estudiante');
    }
    if (result.length === 0) {
      return res.status(404).send('Estudiante no encontrado');
    }
    res.json(result[0]);
  });
});

// 3. Crear un nuevo estudiante
app.post('/estudiantes', (req, res) => {
  const { nombre, edad, carrera } = req.body;
  const sql = 'INSERT INTO estudiantes (nombre, edad, carrera) VALUES (?, ?, ?)';
  db.query(sql, [nombre, edad, carrera], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al crear el estudiante');
    }
    res.status(201).send('Estudiante creado con éxito');
  });
});

// 4. Actualizar un estudiante
app.put('/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, edad, carrera } = req.body;
  const sql = 'UPDATE estudiantes SET nombre = ?, edad = ?, carrera = ? WHERE id = ?';
  db.query(sql, [nombre, edad, carrera, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al actualizar el estudiante');
    }
    res.send('Estudiante actualizado con éxito');
  });
});

// 5. Eliminar un estudiante
app.delete('/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM estudiantes WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al eliminar el estudiante');
    }
    res.send('Estudiante eliminado con éxito');
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
