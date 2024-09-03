import express from 'express';
import {Sequelize} from 'sequelize';
import User from './model/User.js';
import config from './config/database.js'
import userRoutes from './routes.js'



const app = express();
app.use(express.json())


const sequelize = new Sequelize(config)
User.init(sequelize)

sequelize.authenticate().then(() => {
    console.log('Banco de dados conectado.')
    app.listen(8080, () => console.log("Servidor on"))

}).catch((err)=>{console.error(err)})


app.use('/usuarios', userRoutes);






