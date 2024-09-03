import { execSync } from'child_process';
import pgtools from 'pgtools';
import database from './database.js';

const config = database

const databaseName = config.database;

pgtools.createdb(config, databaseName, function (err, res) {
  if (err && err.name !== 'duplicate_database') {
    console.error('Erro ao criar o banco de dados:', err);
    process.exit(1);
  } else {
    console.log(`Banco de dados '${databaseName}' está pronto.`);

    // Executar as migrations após garantir que o banco de dados existe
    execSync('npx sequelize-cli db:migrate', { stdio: 'inherit' });
  }
});
