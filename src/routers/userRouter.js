import express from 'express'

const router= express.Router()
import criarUser from '../controllers/user/criarUsuario.js'
import buscarUsuario from '../controllers/user/buscarUsuario.js'


router.get('/:id', buscarUsuario)
router.post('/', criarUser)



export default router