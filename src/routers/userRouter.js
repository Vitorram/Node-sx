import express from 'express'

const router= express.Router()
import criarUser from '../controllers/user/criarUsuario.js'
import buscarUsuario from '../controllers/user/buscarUsuario.js'
import atualizarUsuario from '../controllers/user/atualizarUsuario.js'
import deletarUsuario from '../controllers/user/deletarUsuario.js'
import parcialUsuario from '../controllers/user/parcialUsuario.js'


router.get('/', buscarUsuario)
router.post('/', criarUser)
router.put('/', atualizarUsuario)
router.delete('/', deletarUsuario)
router.patch('/', parcialUsuario)


export default router