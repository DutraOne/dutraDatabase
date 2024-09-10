import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://dutrasystem_user:pEZQm1rtLtv9L9FYOAIJsrr3eP2bU8C1@dpg-crbp03lds78s73942ttg-a.oregon-postgres.render.com/dutrasystem';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;