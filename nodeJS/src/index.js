require("dotenv").config(); //importação global
//dotenv = utilizado como variável de ambiente

const express = require("express");
//express = biblioteca para montar a API

const port = process.env.PORT;
//"process" é uma função nativa do node, "env" é para retornar a variável de ambiente "port"

const app = express();

app.use(express.json());
//informando que a entrada e saída de dados será do tipo json

app.listen(port, () => console.log(`Server started on port ${port}`));
//solicitando para o express listar, na porta informada, e solicitando para exibir determinada mensagem, ou seja, subindo o servidor
