<h2> Exemplo Mentoria Java com Angular</h2>

Para clonar o projeto(com GitHub Cli)
```
gh repo clone claudioneves1981/exemplo-mentoria-angular-java
```

acessando a pasta do projeto execute o seguinte comando instalar o angular CLI
```
$ ./npm install @angular/cli
```
logo em seguida verifique se o angular está instalado corretamente executando o seguinte comando
```
./ng --version
```
execute o comando abaixo para setar a pasta de target para o angular.
```
$ sed -i -e 's,dist/client,target/classes/static,' angular.json
```
Instale os modulos pelo maven usando  ```./mvnw generate-resources```

crie uma pasta chamada static dentro de target/classes

Para executar o projeto no terminal, digite o seguinte comando:

```shell script
mvn spring-boot:run 
```

Você pode testar os endpoints e a documentação usando swagger ui
```
http://localhost:8080/swagger-ui.html
```

para visualizar a pagina principal você pode digitar.

```
http://localhost:8080/
```

São necessários os seguintes pré-requisitos para a execução do projeto:

* Java 8 ou versões superiores.
* Maven
* Intellj IDEA Community Edition ou sua IDE favorita.
* Controle de versão GIT instalado na sua máquina.
* GitHub Cli instalado na sua maquina.
* Conta no GitHub para o armazenamento do seu projeto na nuvem.
* H2 para banco de dados.
* Node JS
* Bootstrap e Angular para fazer o front.

Abaixo, seguem links dos principais recursos usados no projeto.

* [Referência do Intellij IDEA Community, para download](https://www.jetbrains.com/idea/download)
* [Palheta de atalhos de comandos do Intellij](https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf)
* [Site oficial do Spring](https://spring.io/)
* [Site oficial do GIT](https://git-scm.com/)
* [Github Cli](https://cli.github.com/)
* [Bootstrap 5.0.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
* [Node Js](https://nodejs.org/en/)
* [Documentação Angular](https://angular.io/docs)
* [GitHub Referencia para Montagem do Projeto com Angular](https://github.com/dsyer/spring-boot-angular)
