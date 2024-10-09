import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://postgres:bfQPixRJSeBGeddfgVgSkAlJIBxbjkJk@autorack.proxy.rlwy.net:23816/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;