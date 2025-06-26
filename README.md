🎓 Sistema de Gerenciamento Escolar

Autores:
Luan Teixeira RA: 6322504
Alisson Ribeiro RA:6324605
Danilo Lenardi RA: 6324049

Uma API REST para gerenciamento completo de usuários, matrícula, presenças, avaliações, boletins, materiais de aula, notificações e pagamentos. Desenvolvida com Node.js, PostgreSQL, Docker e Nginx.

🚀 Stack utilizada

Node.js (Express, TS, Prisma)

PostgreSQL

Nginx (como reverse proxy)

Docker e Docker Compose

📦 Subindo o projeto

✅ Pré-requisitos

Docker

Docker Compose

▶️ Passo a passo

Clone o repositório:

git clone https://github.com/LuuanT7/management_system_api.git

cd management_system_api

Copie o arquivo .env.exemple:

cd .env.exemple .env

Suba os containers:

docker-compose up --build

Entre no bash do container node

docker compose exec -it node_management_system_container bash

Execute o codigo:

npx prisma migrate dev

Para que crie as migrations

Para pré popular o banco use o comando dentro do bash

npm run prisma:seed

para que execute as seeds e crie os usuarios admins entre outros dados.

Acesse a aplicação:

API: http://localhost:8080/api

📌 Endpoints principais da API

👤 Usuários

➕ Criar usuário

POST /api/users/create
(define tipo de usuário: guardian, teacher ou student)

📝 Matrículas (Enrollment)

➕ Matricular aluno

POST /api/enrollment/create

📆 Presença (Attendance)

📌 Marcar presença

#Em desenvolvimento...

📋 Listar presenças por aluno ou data

#Em desenvolvimento...

🏫 Classe (Class)

➕ Criar classe

#Em desenvolvimento...

📋 Listar classes

#Em desenvolvimento...

📊 Boletim (GradeReport)

➕ Criar boletim do aluno

#Em desenvolvimento...

📋 Consultar boletim por aluno

#Em desenvolvimento...

🧮 Notas (Grade)

➕ Registrar nota

#Em desenvolvimento...

📝 Atividades (Activity)

➕ Criar avaliação

#Em desenvolvimento...

📚 Materiais de Aula (ClassMaterial)

➕ Adicionar material

#Em desenvolvimento...

🔔 Notificações

➕ Criar notificação

#Em desenvolvimento...

Usos: alerta de presença, notas lançadas, pendência de pagamento, entre outros.

💰 Pagamentos (Payment)

➕ Registrar pagamento
#Em desenvolvimento...

📋 Histórico de pagamentos

#Em desenvolvimento...

🔎 Teste a API no Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/team-monkey/workspace/management-system/collection/29388628-f8ced165-b863-41da-97b2-047c3e0c26b4?action=share&creator=29388628)

🐘 Banco de Dados

As credenciais estão no arquivo .env. Exemplo:

POSTGRES_HOST=postgres_container

POSTGRES_PORT=5432

POSTGRES_USER=usuario

POSTGRES_PASSWORD=senha

POSTGRES_DB=school_db

🌐 Configuração Nginx

O Nginx escuta na porta 8080 e redireciona para o servidor Node.js na porta 3000.
