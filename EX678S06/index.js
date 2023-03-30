const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(usersRouter);

app.get('/', (req, res) => {
  res.send('Olá!');
});

const port = 3004;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});