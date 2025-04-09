import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useSnackbar } from 'notistack';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const auth = getAuth();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      enqueueSnackbar('Usuário registrado com sucesso', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(`Erro ao registrar usuário: ${error.message}`, { variant: 'error' });
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      enqueueSnackbar('Login bem-sucedido', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(`Erro ao fazer login: ${error.message}`, { variant: 'error' });
    }
  };

  return (
    <div>
      <h1>{isRegister ? 'Registrar' : 'Login'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={isRegister ? handleRegister : handleLogin}>
        {isRegister ? 'Registrar' : 'Login'}
      </button>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Já tenho conta' : 'Registrar'}
      </button>
    </div>
  );
};

export default Auth;