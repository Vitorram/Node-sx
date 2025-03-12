export default function buscarUsuario(req, res) {
    
  const {id} = req.params

  res.json({
      id: parseInt(id),
      name: "vitors",
      email: "vitor@gmail.com",
      avatar: "http://github.com/Vitorram.png",
      message: "Ola {id}"
    })


}