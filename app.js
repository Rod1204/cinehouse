// meu primeiro servidor express

//const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Servidor foi chamado');
    res.send("Feia");
});
app.get('/contatos', (req, res) => res.send(['ai sim gayzinha', 'abalou, lacrou']));
app.get('/contato', (req, res) => res.send({nome: "Rod", idade  :22}))

app.listen(3333, () => console.log ("servidor executando")); 