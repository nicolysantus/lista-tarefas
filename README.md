# Teste Técnico NewM 
Aplicação de lista de tarefas desenvolvida como parte do teste técnico da NewM, demonstrando habilidades em desenvolvimento full-stack.


## Funcionalidades

- 🆕 **Criação de Tarefas:** Adicione novas tarefas com título, descrição e status.
- 👀 **Visualização de Tarefas:** Exiba todas as tarefas cadastradas, oferecendo uma visão geral completa das atividades gerenciadas.
- ✏️ **Edição e Exclusão:** Modifique ou remova tarefas existentes, facilitando a atualização e manutenção da lista conforme necessário.
- 🔍 **Filtragem por Status:** Aplique filtros para visualizar tarefas com base no status, ajudando a organizar e gerenciar as atividades de acordo com seu progresso.

## Stack Utilizada

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
   
## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter os seguintes softwares instalados em seu sistema:

 - Node.js e npm
 - .NET: <a href="https://dotnet.microsoft.com/pt-br/download">Baixe e instale .NET</a>
 - SQL Server e SQL Server Management Studio (SSMS)
 - Visual Studio ou Visual Studio Code
   
## Inicializando o Projeto
### 1. Clone o repositório 
```bash
  https://github.com/nicolysantus/lista-tarefas.git
```
____________

### 2. Conexão com o banco de dados SQL Server
1. Certifique-se de que o SQL Server e o SSMS esteja instalado e configurado corretamente em sua máquina. 

2. Navegue até o diretório (**back-end/appsettings.json**) e utilize a string de conexão abaixo no arquivo de configuração da API para adicionar o seu servidor SQL:

<img src="https://i.pinimg.com/736x/18/8c/24/188c245b70b06b4c26ec3801d9c3a725.jpg" alt="sqlserver" width="300"/>

**Observação:** Mantenha o nome do banco de dados como TesteTecnico para evitar erros.

para conectar ao banco de dados:
```bash
"ConnectionStrings": {
  "DefaultConnection": "Server=DESKTOP-Exemplo;Database=TesteTecnico;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

Se precisar adicionar uma senha à conexão, altere a string de conexão para incluir as credenciais do usuário:
```bash
"ConnectionStrings": {
  "DefaultConnection": "Server=DESKTOP-Exemplo;Database=TesteTecnico;User Id=seu_usuario;Password=sua_senha;TrustServerCertificate=True;"
}
```
____________

### 3. Back-End
1. Navegue até a pasta do projeto da API no terminal:
```bash
cd ./back-end
```

2. Utilize o comando abaixo e execute para compilar o projeto, criar o banco de dados e iniciar a API:
```bash   
start iniciar-api.bat
```
____________

### 4. Front-end (Inicialização)

1. Navegue até a pasta do projeto do front-end
```bash
cd ..
cd ./front-end
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor front-end
```bash
npm start
```

4. 🎉 Agora você deve ser capaz de acessar a aplicação em seu navegador no endereço:
```bash
http://localhost:5173
```

_________

## Endpoints da API

| Método HTTP | Endpoint        | Descrição                                                                 |
|-------------|-----------------|---------------------------------------------------------------------------|
| POST        | /api/lista      | Adiciona uma nova tarefa utilizando os dados enviados no corpo da requisição. |
| GET         | /api/lista      | Lista todas as tarefas cadastradas no sistema.                            |
| GET         | /api/lista/{Id} | Busca e retorna uma tarefa específica com base no ID fornecido.           |
| PUT         | /api/lista/{Id} | Modifica os detalhes de uma tarefa existente, identificada pelo ID.       |
| DELETE      | /api/lista/{Id} | Remove uma tarefa do sistema com base no ID fornecido.                    |

