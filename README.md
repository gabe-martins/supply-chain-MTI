# Supply Chain MTI
 
## Montagem do caso de gerenciamento de mercadorias

#### Para testar: 
 1. Para testar faça o download e execute o comando no terminal `yarn` ou `npm` dentro das pastas backend e web.
 2. Em seguida em ambas as pastas execute o comando `yarn start` ou `npm start` para executar. 
 
#### Como foi feito:
 A partir do caso proposto foi montado um projeto em NodeJS com o auxílio de um banco de dados SQLite, foi feito a criação de três (3) tabelas, uma para os produtos, e outras duas para cadastro de entrada e saída dos produtos. Usando migrations para facilitar os teste e o desenvolvimento além de facilitar o envio do banco de dados. <br/>
	Como frontend foi usado ReactJs com quatro (4) páginas sendo para análise e gerenciamento, inclusão de entradas e saídas e outra para cadastramento de produtos. Usando a lib Axios foi realizado a conexão com a API Rest, e a lib ChartJS para criação das tabelas. 
