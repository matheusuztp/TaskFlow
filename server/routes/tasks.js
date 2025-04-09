// server/routes/tasks.js

const express = require('express');
const router = express.Router();
// Aqui você pode importar o modelo de tarefa, por exemplo, utilizando Mongoose

// Rota para obter todas as tarefas (possivelmente filtradas pelo usuário autenticado)
router.get('/', (req, res) => {
  res.json({ message: 'Lista de tarefas' });
});

// Rota para criar uma nova tarefa
router.post('/', (req, res) => {
  res.json({ message: 'Tarefa criada' });
});

// Rota para atualizar uma tarefa
router.put('/:id', (req, res) => {
  res.json({ message: `Tarefa ${req.params.id} atualizada` });
});

// Rota para excluir uma tarefa
router.delete('/:id', (req, res) => {
  res.json({ message: `Tarefa ${req.params.id} excluída` });
});

module.exports = router;