export default function criarPropriedade(req, res) {
   
  const propriedade = req.body
  
  res.json({
      propriedade: propriedade
    })
}