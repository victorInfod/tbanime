import mysql from 'mysql2/promisse'

const con = await mysql.createConnection({
    host: process .env.MYSQL_HOST,
    user: process .env.MYSQL_USER,
    password: process .env.MYSQL_PWD,
    batabase: process .env.MYSQL_DB,
})

console.log('DB conectado');

export {con}