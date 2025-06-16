# 📚 Management System API

API para gerenciamento de alunos, professores, turmas e disciplinas de uma instituição de ensino. Projeto acadêmico desenvolvido com Node.js, TypeScript, Prisma e Docker.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** com **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Docker & Docker Compose**
- **CLI Table 3** (listagens formatadas no terminal)
- **JWT** para autenticação

---

## 📦 Instalação Local

### Pré-requisitos

- Node.js ≥ 18.x
- Docker e Docker Compose (opcional)
- PostgreSQL (se for rodar sem Docker)

### 1. Clonar o projeto

```bash
git clone https://github.com/LuuanT7/management_system_api.git
cd management_system_api
git checkout feat_endpoints

### Instalar dependências:
** npm install

### Configurar o banco de dados:
Edite o arquivo .env com os dados do PostgreSQL:
** DATABASE_URL="postgresql://    postgres:postgres@localhost:5432management"
JWT_SECRET="suachavesecreta"
**

### Rodar as migrations e seed (opcional):
** npx prisma migrate dev

### Executando com Docker:
** docker-compose up -d

### Acessar o container e aplicar migrations:
** docker exec -it api bash
** npx prisma migrate dev


### 📂 Organização do Projeto:

management_system_api/
│
├── modules/
│   ├── class/
│   ├── student/
│   ├── teacher/
│   └── subject/
│
├── shared/
│   ├── container/       # Injeção de dependências
│   ├── infra/           # Conexão Prisma
│
├── prisma/
│   └── schema.prisma    # Modelos do banco
│
├── docker-compose.yml
├── dockerfile
├── tsconfig.json
├── package.json
└── .env.example


### 📌 Endpoints Disponíveis:

## 🔐 Autenticação:
** Autenticação de usuário com JWT.

## 👨‍🎓 Alunos:
** GET /api/alunos
Lista todos os alunos com paginação.

## 👨‍🏫 Professores:
** GET /api/teachers
Lista professores.

## 📚 Disciplinas:
** GET /api/subjects
Lista disciplinas.

## 🏫 Turmas:
Lista turmas (com filtros por turno, professor e disciplina).

POST /classes
Cria uma nova turma e associa automaticamente um professor.


### 💻 Scripts Disponíveis:
** npm run dev         # Inicia servidor com nodemon
   npx prisma studio   # Interface gráfica para visualizar dados
   npx prisma migrate dev  # Executa migrations

###🧪 Testes
Ainda não implementado.





