const mysql = require('mysql2');
// Crear la conexión
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tabla_evaluacionweb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool.promise(); // Exportar como promesas