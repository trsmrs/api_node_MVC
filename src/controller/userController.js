import User from '../model/User.js'
import crypto from 'node:crypto'


export const createUser = async (req, res) => {
    try {
        const { name, age, email } = req.body

        const userToCreate = {
            id: crypto.randomUUID(),
            name: name,
            age: age,
            email: email
        }
        const user = await User.create(userToCreate)
        return res.status(201).json(user)
    } catch (err) {
            res.status(500).json(err)
    }

}

export const getAllUser = async (req, res) => {
     const users = await User.findAll()

     return res.status(200).json(users)
}

export const deleteUser = (req, res) => {
    res.status(200).json({ message: "Deu bom delet" })
}

