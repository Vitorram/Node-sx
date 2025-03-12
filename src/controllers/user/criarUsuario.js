export default function criarUser(req, res) {
  const {id} = req.params  
  res.json({
      name: "vitors",
      email: "vitor@gmail.com",
      avatar: "http://github.com/Vitorram.png"
      
    })


}