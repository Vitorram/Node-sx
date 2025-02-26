import express from 'express'

const router= express.Router()

router.get('/', (req, res) => {
    res.json({
      name: "vitor",
      email: "vitor@gmail.com",
      avatar: "http://github.com/Vitorram.png"
    })


})

router.post('/', (req, res) => {
  res.json({
    message: "usuario criado com sucesso",
    user:{
    name: "vitor",
    email: "vitor@gmail.com",
    avatar: "http://github.com/Vitorram.png"},
   
  })
})


export default router