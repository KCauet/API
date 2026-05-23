import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('ok, foi') // uma resposta sendo enviara pelo get
})

app.listen(3000)