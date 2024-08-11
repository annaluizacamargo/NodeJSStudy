const mongoose = require("mongoose");

function dbConnect() {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tll6k0q.mongodb.net/?retryWrites=true&w=majority`) //para se conectar ao banco de dados
}

module.exports = dbConnect;