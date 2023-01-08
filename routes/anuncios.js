const express = require("express");
const router = express.Router();
const Anuncio = require("../model/anuncio");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const filter = {};
    if (req.body.tag !== undefined) {
      filter.tags = req.body.tag;
    }
    if (req.body.venta !== undefined) {
      filter.venta = req.body.venta;
    }
    if (req.body.precio !== undefined) {
      filter.precio = {};
      if (req.body.precio.$gte !== undefined) {
        filter.precio.$gte = req.body.precio.$gte;
      }
      if (req.body.precio.$lte !== undefined) {
        filter.precio.$lte = req.body.precio.$lte;
      }
    }
    if (req.body.nombre !== undefined) {
      const regexp = new RegExp(`.*${req.body.nombre}.*`, "i");
      filter.nombre = regexp;
    }
    const anuncio = await Anuncio.find(filter).skip(req.body.skip).limit(req.body.limit);
  
    res.json(anuncio);
  } catch (err) {
    next(err);
  }
});

router.get("/tags", async function (req, res, next) {
  try {
    const result = await Anuncio.tags();
    const tags = [];
    for (let i = 0; i < result.length; i++) {
      result[i].tags.forEach((tag) => {
        if (tags.includes(tag) === false) {
          tags.push(tag);
        }
      });
    }
    res.json(tags);
  } catch (err) {
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const anuncio = new Anuncio(req.body);
    const result = await anuncio.save();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
