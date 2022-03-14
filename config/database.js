const mongoose = require('mongoose')

const conexao = async()=>{
    //conexão local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexão atlas
    var atlas = await mongoose.connect('mongodb+srv://Fernando1403:Cluster111@cluster1.uman3.mongodb.net/ac1tri')
}

module.exports = conexao