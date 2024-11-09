// db.js
import { Client } from "pg";

let conn;

if (!conn) {
  conn = new Client ({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  });
}
await conn.connect();
export default conn;
