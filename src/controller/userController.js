export const createUser = (req, res) => {
    return res.status(200).json({ message: "Usuário criado." })
}

export const getAllUser = (req, res) => {
    res.status(200).json({ message: "Deu bom GET ALL" })
}

export const deleteUser = (req, res) => {
    res.status(200).json({ message: "Deu bom delet" })
}

