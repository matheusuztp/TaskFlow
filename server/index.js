const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('TaskFlow API - Servidor funcionando!');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});