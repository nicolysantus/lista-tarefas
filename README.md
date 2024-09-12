# Teste Técnico NewM 
Aplicação de lista de tarefas desenvolvida como parte do teste técnico da NewM, demonstrando habilidades em desenvolvimento full-stack.


## Funcionalidades

- 🆕 **Criação de Tarefas:** Adicione novas tarefas com título, descrição e status.
- 👀 **Visualização de Tarefas:** Exiba todas as tarefas cadastradas, oferecendo uma visão geral completa das atividades gerenciadas.
- ✏️ **Edição e Exclusão:** Modifique ou remova tarefas existentes, facilitando a atualização e manutenção da lista conforme necessário.
- 🔍 **Filtragem por Status:** Aplique filtros para visualizar tarefas com base no status, ajudando a organizar e gerenciar as atividades de acordo com seu progresso.

## Tecnologias Utilizadas

**Front-end:**  
 - React: 18.2.0
 - react-router-dom: 6.22.3 
 - Axios: 1.6.8

**Back-end:**
 - .NET: 8.0
 - ASP.NET Core: 8.0
 - SQL Server

**Ferramentas:**
 - Entity Framework Core: 8.0.8
 - Docker
   
## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter o seguinte software instalado em seu sistema:

 - Node.js e npm
 - .NET SDK
 - SQL Server e SSMS
 - Visual Studio ou Visual Studio Code
   
## Inicializando o Projeto
### 1. Clone o repositório 
```bash
  [https://github.com/nicolysantus/lista-de-tarefas.git]
```
____________

### 2. Conexão com o banco de dados SQL Server
1. Certifique-se de que o SQL Server (SSMS) esteja instalado e configurado corretamente em sua máquina. 

2. Utilize a string de conexão abaixo no arquivo de configuração da API 
(**to-do-list/appsettings.json**)
para conectar ao banco de dados:
```bash
"ConnectionStrings": {
  "DefaultConnection": "Server=DESKTOP-Exemplo;Database=TesteTecnico;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

Se precisar adicionar uma senha à conexão, altere a string de conexão para incluir as credenciais do usuário:
```bash
"ConnectionStrings": {
  "DefaultConnection": "Server=DESKTOP-4D0SI82;Database=TesteTecnico;User Id=seu_usuario;Password=sua_senha;TrustServerCertificate=True;"
}
```

3. Navegue até a pasta do projeto da API no terminal:
```bash
cd /to-do-list
```

5. Em seguida, rode o comando para criar as migrações no banco de dados:
```bash
update-database
```

____________

### 3. API

1. Navegue até a pasta do projeto da API no terminal:
```bash
cd /to-do-list
```

3. Compile e execute o projeto para iniciar o servidor:
```bash
dotnet build
dotnet run
```

4. API estará disponível no endereço:
```bash
https://localhost:7093
```

__________

### 4. Front-end

1. Navegue até a pasta do projeto do front-end
```bash
cd /front-end
```

2. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor frontend:
```bash
npm start
```

5. Agora você deve ser capaz de acessar a aplicação em seu navegador no endereço:
```bash
http://localhost:5173
```

_________

## Endpoints da API

| Método HTTP | Endpoint              | Descrição                                           |
|-------------|-----------------------|-----------------------------------------------------|
| POST        | /api/lista            | Cria uma nova tarefa com base nos dados fornecidos  |
| GET         | /api/lista            | Retorna todas as tarefas existentes                 |
| GET         | /api/lista/{Id} | Retorna uma tarefa específica com base no ID        |
| PUT         | /api/lista/{Id} | Atualiza os dados de uma tarefa existente com base no ID |
| DELETE      | /api/lista/{Id} | Deleta uma tarefa existente com base no ID               |
