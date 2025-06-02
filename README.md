🧠 Trabalhos finais Desenvolvimento Web

Uma API REST simples para cadastro, listagem e busca de colaboradores, utilizando Node.js, PostgreSQL e Nginx com Docker.

🚀 Stack utilizada
Node.js (Express)

PostgreSQL

Nginx (como reverse proxy)

Docker e Docker Compose

📦 Subindo o projeto
Pré-requisitos
Docker

Docker Compose

Passo a passo
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/LuuanT7/tf_dev_web.git
cd tf_collaborators
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

📌 Rotas da API
➕ Criar colaborador
POST /api/collaborators/create

Body JSON:

json
Copiar
Editar
{
"name": "João Silva",
"role": "Desenvolvedor",
"can_develop": true
}
📋 Listar colaboradores
GET /api/collaborators/list

Parâmetros opcionais via query:

limit: número de registros (padrão: 10)

offset: deslocamento (padrão: 0)

field: campo para ordenação (ex: name, role)

direction: ASC ou DESC

Exemplo:

bash
Copiar
Editar
http://localhost:8080/api/collaborators/list?limit=5&field=name&direction=ASC
🔍 Buscar colaborador por ID
GET /api/collaborators/:id

👥 Clientes
📌 Novo módulo com 5 endpoints
➕ Criar cliente
POST /api/clients/create

Body JSON:

json
Copiar
Editar
{
  "name": "Maria Oliveira",
  "birth_date": "1990-05-20",
  "rg": "12345678",
  "cpf": "123.456.789-00",
  "phone": "(11) 99999-8888",
  "address": "Rua das Flores",
  "number_house": "100",
  "city": "São Paulo",
  "uf": "SP",
  "cep": "01010-000"
}
Exemplo:

bash
Copiar
Editar
curl -X POST http://localhost:8080/api/clients/create \
  -H "Content-Type: application/json" \
  -d '{"name":"Maria Oliveira","birth_date":"1990-05-20","rg":"12345678","cpf":"123.456.789-00","phone":"(11) 99999-8888","address":"Rua das Flores","number_house":"100","city":"São Paulo","uf":"SP","cep":"01010-000"}'
  
🖊️ Editar cliente
PUT /api/clients/update/:code

Exemplo:

bash
Copiar
Editar
curl -X PUT http://localhost:8080/api/clients/update/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Maria O. Silva","phone":"(11) 98888-7777"}'
  
📋 Listar clientes
GET /api/clients/list

Você pode usar qualquer um dos seguintes parâmetros via query para filtrar os resultados:

code: código do cliente

name: nome

birth_date: data de nascimento (formato: YYYY-MM-DD)

rg: número do RG

cpf: número do CPF

phone: telefone

address: endereço

number_house: número da residência

city: cidade

uf: estado (UF)

cep: CEP

Também é possível usar os parâmetros de paginação e ordenação:

limit: número de registros por página (padrão: 10)

offset: deslocamento (padrão: 0)

field: campo para ordenação (ex: name, city, code)

direction: ASC ou DESC

Exemplo:

bash
Copiar
Editar
curl "http://localhost:8080/api/clients/list?city=São Paulo&uf=SP&limit=5&field=name&direction=ASC"

GET /api/clients/get/:code

Exemplo:

bash
Copiar
Editar
curl http://localhost:8080/api/clients/get/1

❌ Deletar cliente
DELETE /api/clients/delete/:code

Exemplo:

bash
Copiar
Editar
curl -X DELETE http://localhost:8080/api/clients/delete/1


## Teste a API no Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/interstellar-desert-954549/workspace/unifaat)

🐘 Banco de Dados
As credenciais e configurações do banco de dados são definidas no arquivo .env, com base no .env.exemplo.

Exemplo de variáveis:

env
Copiar
Editar
POSTGRES_HOST=postgres_aula_11_container
POSTGRES_PORT=5432
POSTGRES_USER=meu_usuario
POSTGRES_PASSWORD=minha_senha
POSTGRES_DB=collaborators

🌐 Configuração Nginx
O Nginx escuta na porta 8080 e redireciona as requisições para o servidor Node.js na porta 3000.
