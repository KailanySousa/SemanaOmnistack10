const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

// criando um Model no banco, definindo os campos e os tipos
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    avatar_url: String,
    techs: [String], // array de String
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

// exportando o model, passando o nome da tabela e o objeto referente a ela
module.exports = mongoose.model('Dev', DevSchema);