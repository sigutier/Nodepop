const mongoose = require("mongoose");
const conn = mongoose.connection;
conn.on("error", (err) => console.error("mongodb connection error", err));
conn.once("open", () => console.info("Connected to mongodb."));
mongoose.set('strictQuery', true);

// Connection to the database
function mongooseConnect() {

  return mongoose.connect("mongodb://localhost/anuncio");
}

module.exports = mongooseConnect;
