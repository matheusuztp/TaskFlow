# Frontend da Aplicação

Este é o diretório do frontend da aplicação, desenvolvido com React.js.

## Estrutura de Diretórios

```
├── public/          # Arquivos públicos estáticos
│   ├── index.html   # HTML principal
│   ├── favicon.ico  # Ícone da aplicação
│   └── manifest.json# Manifest para PWA
│
├── src/             # Código fonte React
│   ├── components/  # Componentes React reutilizáveis
│   ├── pages/       # Páginas da aplicação
│   ├── services/    # Serviços e integrações com API
│   ├── styles/      # Arquivos de estilo
│   ├── utils/       # Utilitários e helpers
│   └── App.js       # Componente principal
│
├── package.json     # Dependências e scripts
└── README.md        # Esta documentação
```

## Tecnologias Utilizadas

- React.js para construção da interface
- React Router para navegação
- Axios para requisições HTTP
- Styled-components para estilização
- Material-UI para componentes de interface

## Como Iniciar o Desenvolvimento

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

3. Acesse `http://localhost:3000`

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm test`: Executa os testes
- `npm run build`: Gera build de produção
- `npm run eject`: Ejeta as configurações do Create React App

## Padrões de Código

- Utilize componentes funcionais com hooks
- Mantenha componentes pequenos e reutilizáveis
- Siga as convenções de nomenclatura:
  - PascalCase para componentes
  - camelCase para funções e variáveis
  - kebab-case para arquivos CSS

## Integração com Backend

A aplicação se comunica com o backend através de uma API REST. As configurações de conexão estão em `src/services/api.js`.

## Deployment

Para fazer deploy da aplicação:

1. Gere o build de produção:
```bash
npm run build
```

2. O diretório `build` estará pronto para deploy

## Testes

Execute os testes com:
```bash
npm test
```

## Troubleshooting

Problemas comuns e soluções:

1. Erro de CORS: Verifique as configurações do backend
2. Falha na build: Limpe o cache do npm