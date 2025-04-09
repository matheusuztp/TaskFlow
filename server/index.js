// server/index.js

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware para interpretação de JSON
app.use(express.json());

// Habilita CORS para permitir que o frontend se conecte
app.use(cors());

// Endpoint de teste (pode ser removido após os testes iniciais)
app.get('/', (req, res) => {
  res.send('TaskFlow API - Servidor funcionando!');
});

// Rotas para autenticação e gerenciamento de tarefas (criaremos esses arquivos em seguida)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});