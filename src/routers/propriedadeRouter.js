import express from 'express'
const router= express.Router()
import buscarPropriedade from '../controllers/propriedade/buscarPopriedade.js'
import criarPropriedade from '../controllers/propriedade/criarPropriedade.js'
import atualizarPropriedade from '../controllers/propriedade/atualizarPropriedade.js'
import deletarPropriedade from '../controllers/propriedade/deletarPropriedade.js'
import parcialPropriedade from '../controllers/propriedade/parcialPropriedade.js'

router.get('/', buscarPropriedade)
router.post('/', criarPropriedade)
router.put('/', atualizarPropriedade)
router.delete('/', deletarPropriedade)
router.patch('/', parcialPropriedade)


export default router