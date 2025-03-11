import express from 'express'

const router= express.Router()

router.get('/', (req, res) => {
    res.json({
      titulo: "Casa vermelha",
      valor: "R$10.000",
      fotos: "http://github.com/Vitorram.png"
    })


})

router.post('/', (req, res) => {
  res.json({
    message: "Imovel criado com sucesso",
    titulo: "Casa branca",
    valor: "R$10.000",
    fotos: "http://github.com/Vitorram.png"
   
  })
})
router.put('/', (req, res) => {
  res.json({
    message: "Imovel atualizado",
    titulo: "Casa branca",
    valor: "R$15.000",
    fotos: "http://github.com/Vitorram.png"
   
  })
})
router.delete('/', (req, res) => {
  res.json({
    message: "Imovel deletado com sucesso",
  })
})
router.patch('/', (req, res) => {
  res.json({
    message: "Imovel atualizado",
    titulo: "Casa branca",
    valor: "R$9.000",
    fotos: "http://github.com/Vitorram.png"
   
  })
})


export default router