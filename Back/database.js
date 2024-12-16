const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',       
  user: 'root',            
  password: '',            
  database: 'estudiantes', 
});


db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
  console.log('Conexión a la base de datos exitosa');
});

module.exports = db;
