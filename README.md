🎓 Sistema de Gerenciamento Escolar
Uma API REST para gerenciamento completo de usuários, matrícula, presenças, avaliações, boletins, materiais de aula, notificações e pagamentos. Desenvolvida com Node.js, PostgreSQL, Docker e Nginx.

🚀 Stack utilizada
Node.js (Express)

PostgreSQL

Nginx (como reverse proxy)

Docker e Docker Compose

📦 Subindo o projeto
✅ Pré-requisitos
Docker

Docker Compose

▶️ Passo a passo
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repo-escolar.git
cd seu-repo-escolar
Copie o arquivo .env.exemplo:

bash
Copiar
Editar
cp .env.exemplo .env
Suba os containers:

bash
Copiar
Editar
docker-compose up --build
Acesse a aplicação:

API: http://localhost:8080/api

📌 Endpoints principais da API
👤 Usuários
➕ Criar usuário
POST /api/users/create
(define tipo de usuário: guardian, teacher ou student)

🔁 Relacionar usuário com perfil (pivot)
POST /api/users/assign-role

📝 Matrículas (Enrollment)
➕ Matricular aluno
POST /api/enrollment/create

📆 Presença (Attendance)
📌 Marcar presença
POST /api/attendance/mark

📋 Listar presenças por aluno ou data
GET /api/attendance/list

🏫 Classe (Class)
➕ Criar classe
POST /api/class/create

📋 Listar classes
GET /api/class/list

📊 Boletim (GradeReport)
➕ Criar boletim do aluno
POST /api/grade-report/create

📋 Consultar boletim por aluno
GET /api/grade-report/:studentId

🧮 Notas (Grade)
➕ Registrar nota
POST /api/grade/create

📝 Atividades (Activity)
➕ Criar avaliação
POST /api/activity/create

📚 Materiais de Aula (ClassMaterial)
➕ Adicionar material
POST /api/materials/upload

🔔 Notificações
➕ Criar notificação
POST /api/notifications/send

Usos: alerta de presença, notas lançadas, pendência de pagamento, entre outros.

💰 Pagamentos (Payment)
➕ Registrar pagamento
POST /api/payment/create

📋 Histórico de pagamentos
GET /api/payment/list/:studentId

🔎 Teste a API no Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/team-monkey/workspace/management-system/collection/29388628-f8ced165-b863-41da-97b2-047c3e0c26b4?action=share&creator=29388628 )



🐘 Banco de Dados
As credenciais estão no arquivo .env. Exemplo:

env
Copiar
Editar
POSTGRES_HOST=postgres_container
POSTGRES_PORT=5432
POSTGRES_USER=usuario
POSTGRES_PASSWORD=senha
POSTGRES_DB=school_db
🌐 Configuração Nginx
O Nginx escuta na porta 8080 e redireciona para o servidor Node.js na porta 3000.
