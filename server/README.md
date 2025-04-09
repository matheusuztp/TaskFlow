# Backend da Aplicação

Este é o diretório do backend da aplicação, desenvolvido com Node.js, Express e Firebase.

## Estrutura de Diretórios

```
├── routes/          # Rotas da API
│   └── api.js       # Definições das rotas
│
├── middleware/      # Middlewares do Express
│   ├── auth.js      # Middleware de autenticação
│   └── error.js     # Tratamento de erros
│
├── firebase.js      # Configuração do Firebase
├── index.js         # Arquivo principal do servidor
└── serviceAccountKey.json  # Credenciais do Firebase
```

## Tecnologias Utilizadas

- Node.js como runtime
- Express.js como framework web
- Firebase para banco de dados e autenticação
- JSON Web Tokens (JWT) para autenticação
- Middleware personalizados para tratamento de requisições

## Como Iniciar o Desenvolvimento

1. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

2. Preencha as variáveis de ambiente no arquivo .env

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5000`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento com nodemon
- `npm start`: Inicia o servidor em modo produção
- `npm test`: Executa os testes

## Rotas da API

### Autenticação
- POST /api/auth/login
- POST /api/auth/register
- GET /api/auth/verify

### Usuários
- GET /api/users
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id

## Configuração do Firebase

1. Crie um projeto no Firebase Console
2. Baixe as credenciais do service account
3. Renomeie para serviceAccountKey.json
4. Coloque na raiz do projeto

## Middlewares

- `auth.js`: Verifica token JWT
- `error.js`: Tratamento centralizado de erros
- `logger.js`: Logging de requisições

## Deployment

1. Configure as variáveis de ambiente no servidor
2. Execute build se necessário
3. Inicie com PM2 ou similar:
```bash
pm2 start index.js
```

## Segurança

- Todas as senhas são hasheadas
- Tokens JWT são utilizados para autenticação
- CORS está configurado para aceitar apenas origens permitidas
- Variáveis sensíveis estão em .env

## Logs e Monitoramento

- Logs são gerados em `logs/`
- Utilize PM2 para monitoramento em produção

## Backup

O Firebase realiza backups automáticos, mas recomenda-se:

1. Exportar dados periodicamente
2. Manter cópias dos serviceAccountKey.json
3. Documentar alterações no schema

## Troubleshooting

Problemas comuns e soluções:

1. Erro de conexão com Firebase: Verifique credenciais
2. Erro de CORS: Verifique configurações de origem permitida
3. Erro de autenticação: Verifique token JWT