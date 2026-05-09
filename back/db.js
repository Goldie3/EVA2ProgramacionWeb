const mysql = require('mysql2');
// Crear la conexión
const pool = mysql.createPool({
    host: '10.32.0.78',
    user: 'root',
    password: 'admin',
    database: 'datadb2',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool.promise(); // Exportar como promesas