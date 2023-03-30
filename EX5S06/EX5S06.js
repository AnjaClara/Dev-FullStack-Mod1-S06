const express = require('express');
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Olá!');
});

app.post('/objeto', (req, res) => {
  const objetoRecebido = req.body;
  res.json(objetoRecebido);
  
})

app.listen(3003, () => {
  console.log('Servidor funcionando na rota 3003');
});