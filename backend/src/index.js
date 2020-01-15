// importando o express (microframework)
// ajuda na criação das rotas
const express = require('express');

// importando o mongoose 
// permite o acesso a uma base de dados MONGODB
const mongoose = require('mongoose');

// importante as rotas
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://kailany:140975asg@cluster0-kjkga.mongodb.net/week10?retryWrites=true&w=majority',
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(express.json());

app.use(routes);

// dizendo em qual porta a aplicação está escutando
app.listen(3333);