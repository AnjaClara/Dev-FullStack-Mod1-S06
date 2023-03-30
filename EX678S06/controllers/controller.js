const users = [
  [
    { "id": 1, "nome": "Fulano", idade: 18, "cargo": "junior", "senha": "12345678" },
    { "id": 2, "nome": "Ciclano", "idade": 25, "cargo": "pleno", "senha": "abcdefgh" },
    { "id": 3, "nome": "Beltrano", "idade": 30, "cargo": "senior", "senha": "ijklmnop" }
  ]
];

// EX6
// const postUserByName = (req,res) => {
      
//   console.log(req.params.name);
//   res.send("Inseriu " + req.params.name)

// }

function verificaCargo(req, res, next) {
  const { cargo } = req.body;
  if (cargo !== "líder") {
    return res.status(401).json({ mensagem: "Usuário não possui cargo suficiente" });
  }
  // se o cargo for válido, continua com a requisição
  next();
}

//Para o EX8 foi acrescentado "verificaCargo";
// Caso queira validar apenas o EX7, comente a função e retire da const postUsers
const postUsers = (req,res) => {

  const { nome, idade, cargo, senha } = req.body;
  if (!nome || !idade || !cargo || !senha) {
    return res.status(406).json({ mensagem: 'Está faltando dados para concluir a operação' });
  }
  if (idade < 21) {
    return res.status(400).json({ mensagem: 'Usuário não possui idade suficiente' });
  }
  const id = users.length + 1;
  const user = { id, nome, idade, cargo, senha };
  users.push(user);
  return res.status(200).json({ mensagem: 'Criado com sucesso' });
}

const deleteUserById = (req,res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(406).json({ mensagem: 'Está faltando dados para concluir a operação' });
  }
  const index = users.findIndex(user => user.id === id);
  if (index < 0) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
  users.splice(index, 1);
  return res.status(200).json({ mensagem: 'Deletado com sucesso' });
  
  // do EX6
  // console.log(req.params.id);
  // res.send("Deletou " + req.params.id)

}

module.exports= {
  
  // postUserByName,
  postUsers,
  verificaCargo,
  deleteUserById

}