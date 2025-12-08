const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

const DB_NAME = "testdb";
const DB_USER = "root";
const DB_PASS = "";
const DB_HOST = "localhost";

async function createDatabase() {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    await connection.end();
}

async function connectSequelize() {
    await createDatabase();

    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
        host: DB_HOST,
        dialect: "mysql"
    });

    await sequelize.authenticate();

    return sequelize;
}

module.exports = connectSequelize;
