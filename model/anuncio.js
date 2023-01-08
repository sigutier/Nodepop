const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  venta: {
    type: Boolean,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

anuncioSchema.statics.tags = async function () {
  var query = Anuncio.find({});
  query.select("tags");
  return await query.exec();
};

const Anuncio = mongoose.model("Anuncio", anuncioSchema);

module.exports = Anuncio;
