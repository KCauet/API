import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users) // uma resposta sendo enviara pelo get
})

app.listen(3000)


/*
    API para os usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/