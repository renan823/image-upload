# Salvar imagens no banco de dados usando o type 'BLOB'

Para rodar o projeto, clone o reposítório em sua máquina. Em seguida,
abra a pasta clonada em seu editor de código e inicie um terminal.
Dentro da pasta, instale os pacotes necessários com 
```bash
npm i 
```
Após, crie e configure o arquivo ".env" :
```bash
    DB_NAME=photos
    DB_USER="Your user"
    DB_PASSWORD="Your passowrd"
    DB_HOST=localhost
```
No terminal mysql, crie o banco de dados chamado "photos":
```mysql
    create database photos;
```
Para terminar, execute o comando abaixo: 
```bash
    nodemon index
```
Para acesar a aplicação, abra o navegador em http://localhost:3000 .

# Funcionamento
Ao salvar uma imagem, o servidor irá convertê-la em um Buffer. Esse será salvo no banco de dados em um campo do tipo BLOB. 
Para recuperar a imagem (usando o id), a consulta retornará uma string (gigante) contendo os dados da imagem. Para usá-la, basta colocar a string obtida como src de uma tag "img" html.
```html
    <img src="string obtida">
```

