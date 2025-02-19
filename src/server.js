const express = require('express')
const app = express()
const port = 3000


app.get('/product', (req, res) => { //OBTER OU RECEBER ALGO DO SERVIDOR
  res.send('Produto listado GET')

}) 
app.post('/product', (req, res) => { 
  res.send('Produto criado POST')

})
app.put('/product', (req, res) => { 
  res.send('Produto atualizado PUT')

})
app.delete('/product', (req, res) => {
  res.send('Produto deletado ')

})
app.patch('/product', (req, res) => {
  res.send('Produto parcialmente atualizado')

})

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})
