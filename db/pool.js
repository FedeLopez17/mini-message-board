import pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: `postgresql://${process.env.DB_ROLE}:${process.env.DB_ROLE_PASSWORD}@localhost:5432/messageboard`,
});

export default pool;
