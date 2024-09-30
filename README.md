# Projeto de Testes de API com Cypress

Este é um projeto básico de estudo, contém testes automatizados para uma API utilizando Cypress. Os testes abrangem funcionalidades relacionadas a usuários, médicos, pacientes e consultas.


## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

## Instalação

1. Clone este repositório
2. Navegue até o diretório do projeto
3. Execute o comando para instalar as dependências:

```bash
npm install
```

## Configuração

O arquivo `cypress.config.js` contém as configurações principais do Cypress, incluindo a URL base da API e configurações do Allure para geração de relatórios.

O arquivo `cypress.env.json` contém as credenciais padrão para autenticação.

## Executando os Testes

Para executar os testes, use o seguinte comando:

```bash
npm run cypress:run
```

## Gerando Relatórios

Este projeto está configurado para usar o Allure para geração de relatórios. Para gerar e visualizar os relatórios, execute:

```bash
npm run test:report
```

Se você desejar gerar um arquivo único de relatório, você pode usar o seguinte comando após a execução dos testes:

allure generate --single-file path/to/allure-results

Substitua `path/to/allure-results` pelo caminho correto para o diretório de resultados do Allure.

## Estrutura dos Testes

Os testes estão organizados em quatro arquivos principais:

1. `01 - usuario.cy.js`: Testes de autenticação e cadastro de usuários
2. `02 - medico.cy.js`: Testes relacionados a médicos (CRUD)
3. `03 - paciente.cy.js`: Testes relacionados a pacientes (CRUD)
4. `04 - consultas.cy.js`: Testes de registro de consultas

Cada arquivo de teste utiliza fixtures correspondentes para os dados de teste.

## Comandos Personalizados

O arquivo `commands.js` contém comandos personalizados do Cypress, incluindo um comando de login e uma sobrescrita do comando `request` para incluir o token de autenticação em todas as requisições.


