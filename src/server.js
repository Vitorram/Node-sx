const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})
app.get('/product', (req, res) => {
  res.send('Nome: Laranja<br> codigo: 132217 <br> tipo: panamera <br> valor: R$ 40')

})

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})
