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

Execute o codigo:

npx prisma migrate dev

Para que crie as migrations localmente

Para  popular o banco com algumas informações para teste use o comando

docker compose exec -it node_management_system_container bash

para que entre no bash do container node e execute o comando

npm run prisma:seed

para executar as seeds e crie os usuarios admins entre outros dados.

Acesse a aplicação:

API: http://localhost:8080/v1

📌 Endpoints principais da API

👤 Usuários

 /v1/users 

A partir desta rota temos tudo referente ao endpoint de usuários

(definição do tipo de usuário: guardian, teacher ou student, somente admins podem criar e especificar a role do usuário)

📝 Matrículas (Enrollment)

/v1/enrollment

A partir desta rota temos tudo referente ao endpoint de matrículas.

📆 Presença (Attendance)

v1/attendance

A partir desta rota temos tudo referente ao endpoint de marcação de presença

🏫 Classe (Class)

v1/class

A partir desta rota temos tudo referente ao endpoint de Aulas.

📊 Boletim (GradeReport)

v1/grade-report

A partir desta rota temos tudo referente ao endpoint de boletins;

🧮 Notas (Grade)

v1/grade

A partir desta rota temos tudo referente ao endpoint de notas das atividades;

📝 Atividades (Activity)

v1/grade

A partir desta rota temos tudo referente ao endpoint de notas das atividades;

📚 Materiais de Aula (ClassMaterial)

v1/grade

A partir desta rota temos tudo referente ao endpoint de notas das atividades;

🔔 Notificações

v1/notifications

A partir desta rota temos tudo referente ao endpoint de notificações;

Usos: alerta de presença, notas lançadas, pendência de pagamento, entre outros.

💰 Pagamentos (Payment)

v1/payment

A partir desta rota temos tudo referente ao endpoint de pagamentos;

#Em desenvolvimento...

📋 Histórico de pagamentos

v1/payment-history

A partir desta rota temos tudo referente ao endpoint de historico de pagamentos;

#Em desenvolvimento...

🔎 Teste a API no Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/team-monkey/workspace/management-system/collection/29388628-f8ced165-b863-41da-97b2-047c3e0c26b4?action=share&creator=29388628)

🐘 Banco de Dados

As credenciais estão no arquivo .env. Exemplo:

POSTGRES_USER=postgres

POSTGRES_PASSWORD=postgres

POSTGRES_DB=management_system

POSTGRES_PORT=5432

POSTGRES_HOST=postgres_management_system_container

🌐 Configuração Nginx

O Nginx escuta na porta 8080 e redireciona para o servidor Node.js na porta 3000.
