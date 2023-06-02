const mongoose = require("mongoose");

try {
  mongoose.connect(`${process.env.MONGO_URL}/mosquito-finder-db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  mongoose.Promise = global.Promise;

  const db = mongoose.connection;
} catch (erro) {
  console.log(erro);
}

module.exports = mongoose;