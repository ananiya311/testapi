const mysql2 = require("mysql2/promise");
require("dotenv").config();
const connection = mysql2.createPool({
    host: process.env.HOST || "localhost",
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
module.exports = connection;