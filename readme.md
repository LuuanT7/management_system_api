*** Estrura do projeto 
projeto_faculdade/
├── node_modules/
├── src/
│   ├── app.ts
│   ├── shared/
│   │   ├── container/
│   │   │   └── index.ts
│   │   └── infra/
│   │       └── prisma/
│   │           └── client.ts
│   ├── modules/
│   │   └── class/
│   │       ├── controllers/
│   │       │   └── ClassController.ts
│   │       ├── dtos/
│   │       │   ├── IClassDTO.ts
│   │       │   └── IListClassesDTO.ts
│   │       ├── repositories/
│   │       │   ├── IClassRepository.ts
│   │       │   └── implementations/
│   │       │       └── PrismaClassRepository.ts
│   │       ├── routes/
│   │       │   └── class.routes.ts
│   │       ├── services/
│   │       │   └── ListClassesService.ts
│   │       └── useCases/
│   │           ├── CreateClassUseCase.ts
│   │           └── ListClassesUseCase.ts
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
***


***
📂 Como os módulos interagem
DTO (IClassDTO.ts): Interface para os dados que vão entrar na criação de uma turma.

UseCase (CreateClassUseCase.ts): Contém a regra de validação do horário conforme o turno.

Repository (IClassRepository.ts): Interface com métodos como create, findByFilters, etc.

Controller (ClassController.ts): Recebe a requisição e passa os dados para o use case.

Service (ListClassesService.ts): Contém a lógica de listagem com filtros por professor, turno e disciplina.

Rota (class.routes.ts): Define endpoints como:

POST /classes

GET /classes?turno=MORNING&disciplina=Math

***