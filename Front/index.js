const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


const BACKEND_URL = 'http://<IP_O_DOMINIO_DEL_BACKEND>:3001'; 


app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/estudiantes`);
    res.render('index', { estudiantes: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos');
  }
});


app.get('/crear', (req, res) => {
  res.render('form', { estudiante: null });
});

app.post('/crear', async (req, res) => {
  try {
    await axios.post(`${BACKEND_URL}/estudiantes`, req.body);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro');
  }
});


app.get('/editar/:id', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/estudiantes/${req.params.id}`);
    res.render('form', { estudiante: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos');
  }
});


app.post('/editar/:id', async (req, res) => {
  try {
    await axios.put(`${BACKEND_URL}/estudiantes/${req.params.id}`, req.body);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el registro');
  }
});


app.post('/eliminar/:id', async (req, res) => {
  try {
    await axios.delete(`${BACKEND_URL}/estudiantes/${req.params.id}`);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el registro');
  }
});


app.listen(PORT, () => {
  console.log(`Servidor de front-end corriendo en http://localhost:${PORT}`);
});
