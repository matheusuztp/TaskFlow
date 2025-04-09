const express = require('express');
const router = express.Router();
const { admin } = require('../firebase');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const usersRef = admin.firestore().collection('users');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await usersRef.where('email', '==', email).get();
    if (!existingUser.empty) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = uuidv4();
    await usersRef.doc(userId).set({
      id: userId,
      email,
      password: hashedPassword
    });

    res.json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userSnapshot = await usersRef.where('email', '==', email).get();
    if (userSnapshot.empty) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const user = userSnapshot.docs[0].data();

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Senha inválida' });
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ message: 'Login bem-sucedido', token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
});

module.exports = router;