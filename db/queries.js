import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query(
    `SELECT * FROM messages ORDER BY created_at DESC`
  );
  return rows;
}

async function getMessageByID(id) {
  const { rows } = await pool.query(
    `SELECT * FROM messages WHERE message_id = $1`,
    [id]
  );
  return rows[0];
}

async function insertMessage(message, author) {
  await pool.query(
    "INSERT INTO messages (message_text, author) VALUES ($1, $2)",
    [message, author]
  );
}

export default {
  getAllMessages,
  getMessageByID,
  insertMessage,
};
