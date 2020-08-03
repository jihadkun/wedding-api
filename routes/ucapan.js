var express = require("express");
var router = express.Router();
const model = require("../models/index");

/* GET users listing. */
router.get("/ucapan", async function (req, res, next) {
  try {
    const getUcapan = await model.ucapan.findAll({});
    if (getUcapan.length !== 0) {
      res.json({
        status: "OK",
        messages: "BERHASIL get all ucapan",
        data: getUcapan,
      });
    } else {
      res.json({
        status: "ERROR",
        messages: "BELUM ADA data ucapan di database",
        data: {},
      });
    }
  } catch (error) {
    res.json({
      status: "ERROR",
      messages: error.messages,
      data: {},
    });
  }
});

// Create info
router.post("/ucapan", async function (req, res, next) {
  try {
    const { nama, komentar } = req.body;
    const createUcapan = await model.ucapan.create({
      nama,
      komentar,
    });
    if (createUcapan) {
      res.status(201).json({
        status: "OK",
        messages: "BERHASIL create ucapan",
        data: createUcapan,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      messages: error.message,
      data: {},
    });
  }
});

// Update all info by id
router.put("/ucapan/:id", async function (req, res, next) {
  try {
    const ucapanId = req.params.id;
    const { nama, komentar } = req.body;
    const updateUcapan = await model.ucapan.update(
      {
        nama,
        komentar,
      },
      {
        where: { id: ucapanId },
      }
    );
    if (updateUcapan) {
      res.json({
        status: "OK",
        message: "BERHASIL update ucapan",
        data: {
          nama,
          komentar,
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      messages: error.message,
      data: {},
    });
  }
});

// Delete all info by id
router.delete("/ucapan/:id", async function (req, res, next) {
  try {
    const ucapanId = req.params.id;
    const delUcapan = await model.ucapan.destroy({ where: { id: ucapanId } });
    if (delUcapan) {
      res.json({
        status: "OK",
        messages: "BERHASIL delete ucapan",
        "deleted ucapan id": req.params.id,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      messages: error.messages,
      data: {},
    });
  }
});

module.exports = router;
