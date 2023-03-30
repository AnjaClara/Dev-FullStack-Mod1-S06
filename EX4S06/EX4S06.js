const express = require('express');
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Olá!');
});

app.get('/api/:nome', (req, res) => {
  const nome = req.params.nome;
  console.log(`Rota de API criada pelo(a): ${nome}`);
  res.send(`Olá, ${nome}!`);
})

app.listen(3002, () => {
  console.log('Servidor funcionando na rota 3002');
});