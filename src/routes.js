import express from 'express';
import  {createUser, getAllUser, deleteUser}  from './controller/userController.js';


const router = express.Router()


router.post('/cadastro', createUser)
router.get('/allusers', getAllUser)
router.delete('/delet', deleteUser)



export default router;