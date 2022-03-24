const mongoose = require('mongoose')

const conexao = async() => {

var atlas = await mongoose.connect('COlOQUE SEU LINK DO MONGO DB')
}

module.exports = conexao