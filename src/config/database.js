export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'usersdb',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true 
    }
}