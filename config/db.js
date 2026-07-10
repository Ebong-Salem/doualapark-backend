const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(client => {
    console.log('✅ PostgreSQL connecté');
    client.release();
  })
  .catch(err => {
    console.error('❌ Erreur PostgreSQL :', err);
  });

module.exports = pool;