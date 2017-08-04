# Curso Algaworks
> Angular, REST e Spring-Boot

## 1. Introdução ao REST
- 1.1. Introdução ao curso
- 1.2. Como usar o suporte
- 1.3. O que é SOFEA?
- 1.4. O que é REST?
- 1.5. Conhecendo o projeto do curso
- 1.6. Ambiente de desenvolvimento REST
- 1.7. Testando APIs com Postman
- 1.8. Introdução ao protocolo HTTP

## 2. Fundamentos do REST
- 2.1. O que é um recurso?
- 2.2. Representações de um recurso
- 2.3. Modelo de maturidade Richardson - O nível 0
- 2.4. Modelo de maturidade Richardson - O nível 1
- 2.5. Modelo de maturidade Richardson - O nível 2
- 2.6. Modelo de maturidade Richardson - O nível 3
- 2.7. HATEOAS
- 2.8. Segurança de APIs REST
- 2.9. Idempotência

## 3. Primeiras consultas e cadastros na API
- 3.1. Criando o projeto da API
- 3.2. Conectando ao MySQL
- 3.3. Migração de dados com Flyway
- 3.4. Consultando primeiro recurso com GET
- 3.5. Coleção vazia, o que retornar?
- 3.6. Cadastrando nova categoria com POST
- 3.7. Desafio: Retornar 404 caso não exista a categoria
- 3.8. Validando atributos desconhecidos
- 3.9. Tratando erros com ExceptionHandler
- 3.10. Validando valores inválidos com Bean Validation
- 3.11. Desafio: Criando o cadastro de pessoa
- 3.12. Usando eventos para adicionar header Location

## 4. Atualização e remoção de recursos na API
- 4.1 Removendo pessoa com DELETE
- 4.2. Sobre atualização de recursos REST
- 4.3. Atualizando pessoa com PUT
- 4.4. Implementando atualização parcial com PUT

## 5. Relacionamentos entre recursos REST
- 5.1. Criando a migração e entidade de lançamento
- 5.2. Desafio: Lista e busca de lançamentos
- 5.3. Desafio: Cadastrando o primeiro lançamento
- 5.4. Validando inconsistências
- 5.5. Validando lançamento com Bean Validation
- 5.6. Regra para não salvar pessoa inativa
- 5.7. Implementando pesquisa de lançamento com Metamodel
- 5.8. Desafio: Removendo lançamentos
- 5.9. Implementando a paginação de lançamentos

## 6. Segurança da API
- 6.1. Implementando autenticação BASIC
- 6.2. Fluxo básico do OAuth
- 6.3. Implementando a segurança com OAuth 2
- 6.4. JSON Web Tokens - JWT
- 6.5. Configurando JWT no projeto
- 6.6. Renovando o access token com o refresh token
- 6.7. Movendo o refresh token para o cookie
- 6.8. Movendo o refresh token do cookie para a requisição
- 6.9. O que é CORS?
- 6.10. Criando filtro para CORS
- 6.11. Movendo o usuário para o banco de dados
- 6.12. Adicionando permissões de acesso
- 6.13. Desafio: Finalizando permissões de acesso
- 6.14. Implementando o logout

## 7. Deploy da API em produção
- 7.1. Implementando projeção de lançamento
- 7.2. Profiles do Spring
- 7.3. Criando a conta no Heroku
- 7.4. Deploy da API na nuvem

## 8. Introdução ao Angular
- 8.1. Introdução ao front-end com Angular
- 8.2. AngularJS vs Angular: a confusão das versões
- 8.3. Conhecendo e instalando o Visual Studio Code
- 8.4. Introdução ao HTML
- 8.5. Introdução ao CSS
- 8.6. Instalando o Node e NPM
- 8.7. Instalando e criando um projeto com Angular CLI
- 8.8. Criando seu primeiro componente

## 9. Fundamentos do Angular
- 9.1. Arquitetura do Angular
- 9.2. Escrevendo templates
- 9.3. Interpolação e data binding
- 9.4. Two-way data binding
- 9.5. Iterando com a diretiva ngFor
- 9.6. Exibindo dados condicionais com ngIf
- 9.7. Adicionando estilos CSS em um componente
- 9.8. Criando o projeto do curso
- 9.9. Escolhendo uma biblioteca de componentes
- 9.10. Instalando e testando o PrimeNG

## 10. Módulos e página de pesquisa
- 10.1. Criando o protótipo da página de pesquisa de lançamentos
- 10.2. Exibindo um diálogo de confirmação
- 10.3. Entendendo os módulos (ngModule)
- 10.4. Organizando o projeto em Feature Modules
- 10.5. Tabela de dados do PrimeNG
- 10.6. Fazendo paginação de dados
- 10.7. Desafio: criando página de pesquisa de pessoas

## 11. Componentes, diretivas e pipes
- 11.1. Criando mais componentes
- 11.2. Ciclo de vida de componentes e Lifecycle Hooks
- 11.3. Passando valores com @Input
- 11.4. Passando eventos com @Output e EventEmitter
- 11.5. Respondendo as interações dos usuários
- 11.6. Criando diretivas
- 11.7. Respondendo a eventos de usuários com @HostListener
- 11.8. Usando @HostBinding
- 11.9. Manipulando o Template e DOM com @ViewChild
- 11.10. Conhecendo e usando pipes nativos

## 12. Formulários e página de cadastro
- 12.1. Criando o protótipo da página de cadastro de lançamentos
- 12.2. Criando formulários (Template-driven forms)
- 12.3. Adicionando campos com máscara
- 12.4. Adicionando campos monetários (decimal)
- 12.5. Adicionando campos de datas (Date Picker)
- 12.6. Adicionando caixas de seleção
- 12.7. Validando formulários
- 12.8. Desafio: criando a página de cadastro de pessoa

## 13. Serviços, injeção de dependências e HTTP
- 13.1. Introdução aos serviços
- 13.2. O que é injeção de dependências?
- 13.3. Injetando dependências com Angular
- 13.4. Fazendo chamadas HTTP (GET, POST, PUT e DELETE)
- 13.5. Tratando erros HTTP
- 13.6. Implementando os serviços do projeto
- 13.7. Desafio: implementando serviços

## 14. Roteamento e navegação
- 14.1. Introdução a rotas e SPA (Single Page Application)
- 14.2. Configurando rotas na aplicação
- 14.3. Navegando com RouterLink
- 14.4. Recebendo parâmetros da rota
- 14.5. Fazendo roteamento imperativo
- 14.6. Criando um módulos de rotas (Routing Module)
- 14.7. Fazendo redirecionamento
- 14.8. Tratando rota não encontrada
- 14.9. Carregamento de módulos por demanda (lazy loading)
- 14.10. Definindo o título da página dinamicamente
- 14.11. Desafio: implementando roteamento

## 15. Segurança do front-end
- 15.1. Introdução à segurança do front-end
- 15.2. Criando o protótipo da tela de login
- 15.3. Implementando o serviço de autenticação com OAuth 2 e JWT
- 15.4. Recebendo o JWT (JSON Web Token)
- 15.5. Exibindo o nome do usuário logado
- 15.6. Implementando o logout
- 15.7. Exibindo o menu do sistema conforme permissões do usuário
- 15.8. Protegendo componentes
- 15.9. Introdução a guarda de rotas
- 15.10. Protegendo rotas com CanActivate
- 15.11. Renovando o access token
- 15.12. Desafio: implementando a segurança de pessoas

## 16. Deploy em produção do cliente Angular
- 16.1. Configurando e fazendo build por tipo de ambiente
- 16.2. Respondendo requisições com Node.js e Express
- 16.3. Fazendo deploy no Heroku
- 16.4. Conclusão
