const maria = require('mysql');

const conn = maria.createConnection({
    host: '172.16.2.211',
    port: '3306',
    user: 'marketing',
    password: 'skxortn1!',
    database: ''
});

module.exports = conn;