const express = require('express');
const router = express.Router();
const { db } = require('../firebase');
const authenticateToken = require('../middleware/auth');

const tasksRef = db.collection('tasks');

router.get('/', authenticateToken, async (req, res) => {
  try {
    const tasksSnapshot = await tasksRef.where('userId', '==', req.user.userId).get();
    const tasks = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter tarefas', error });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  const { title, status } = req.body;

  try {
    const newTask = {
      id: uuidv4(),
      title,
      status,
      userId: req.user.userId
    };
    await tasksRef.add(newTask);
    res.json({ message: 'Tarefa criada com sucesso', task: newTask });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar tarefa', error });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  const { title, status } = req.body;
  const taskId = req.params.id;

  try {
    const taskRef = tasksRef.doc(taskId);
    const taskSnapshot = await taskRef.get();
    if (!taskSnapshot.exists || taskSnapshot.data().userId !== req.user.userId) {
      return res.status(403).json({ message: 'Acesso não autorizado' });
    }

    await taskRef.update({ title, status });
    res.json({ message: `Tarefa ${taskId} atualizada com sucesso` });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar tarefa', error });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  const taskId = req.params.id;

  try {
    const taskRef = tasksRef.doc(taskId);
    const taskSnapshot = await taskRef.get();
    if (!taskSnapshot.exists || taskSnapshot.data().userId !== req.user.userId) {
      return res.status(403).json({ message: 'Acesso não autorizado' });
    }

    await taskRef.delete();
    res.json({ message: `Tarefa ${taskId} excluída com sucesso` });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir tarefa', error });
  }
});

module.exports = router;