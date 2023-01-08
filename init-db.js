const connectMongoose = require("./connectMongoose");
const Anuncio = require("./model/anuncio");

connectMongoose();

/* const anuncio = new Anuncio({
  nombre: "iphone 12",
  venta: true,
  precio: 300,
  foto: "",
  tags: ["Teléfono"],
});
anuncio.save(function (err, anuncioCreado) {
  if (err) throw err;
  console.log("Anuncio " + anuncioCreado.nombre + " creado");
}); */

async function main() {
  try {
    await Anuncio.deleteMany({});
    console.log("Data deleted");
  } catch (err) {
    console.log(err);
  }

  try {
    await Anuncio.insertMany([
      {
        nombre: "iphone 12",
        venta: true,
        precio: 300,
        foto: "/images/iphone12.jpeg",
        tags: ["mobile"],
      },
      {
        nombre: "bicicleta",
        venta: false,
        precio: 50,
        foto: "/images/bicicleta.jpeg",
        tags: ["lifestyle"],
      },
      {
        nombre: "iphone 13 pro",
        venta: true,
        precio: 500,
        foto: "/images/iphone13pro.jpeg",
        tags: ["mobile"],
      },
    ]);
    console.log("Data inserted");
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
}

main();
