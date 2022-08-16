const mysql = require('mysql2');

// Connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYSQL username
        user: 'FCarter',
        // Your MySQL password
        password: 'Btown610',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;