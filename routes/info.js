var express = require("express");
var router = express.Router();
const model = require("../models/index");

/* GET users listing. */
router.get("/info", async function (req, res, next) {
  try {
    const getInfo = await model.info.findAll({});
    if (getInfo.length !== 0) {
      res.json({
        status: "OK",
        messages: "BERHASIL get all info",
        data: getInfo,
      });
    } else {
      res.json({
        status: "ERROR",
        messages: "BELUM ADA data info di database",
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
router.post("/info", async function (req, res, next) {
  try {
    const {
      mempelaiPria,
      keluargaPria,
      mempelaiWanita,
      keluargaWanita,
      lokasi,
      tanggal,
      waktu,
      kronologiPertemuan,
    } = req.body;
    const createInfo = await model.info.create({
      mempelaiPria,
      keluargaPria,
      mempelaiWanita,
      keluargaWanita,
      lokasi,
      tanggal,
      waktu,
      kronologiPertemuan,
    });
    if (createInfo) {
      res.status(201).json({
        status: "OK",
        messages: "BERHASIL create info",
        data: createInfo,
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
router.put("/info/:id", async function (req, res, next) {
  try {
    const infoId = req.params.id;
    const {
      mempelaiPria,
      keluargaPria,
      mempelaiWanita,
      keluargaWanita,
      lokasi,
      tanggal,
      waktu,
      kronologiPertemuan,
    } = req.body;
    const updateInfo = await model.info.update(
      {
        mempelaiPria,
        keluargaPria,
        mempelaiWanita,
        keluargaWanita,
        lokasi,
        tanggal,
        waktu,
        kronologiPertemuan,
      },
      {
        where: { id: infoId },
      }
    );
    if (updateInfo) {
      res.json({
        status: "OK",
        message: "BERHASIL update info",
        data: {
          mempelaiPria,
          keluargaPria,
          mempelaiWanita,
          keluargaWanita,
          tanggal,
          lokasi,
          waktu,
          kronologiPertemuan,
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
router.delete("/info/:id", async function (req, res, next) {
  try {
    const infoId = req.params.id;
    const delInfo = await model.info.destroy({ where: { id: infoId } });
    if (delInfo) {
      res.json({
        status: "OK",
        messages: "BERHASIL delete info",
        "deleted info id": req.params.id,
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

router.delete("/info", async function (req, res, next) {
  try {
    const delAllInfo = await model.info.destroy({ where: {} });
    if (delAllInfo) {
      res.json({
        status: "OK",
        messages: "BERHASIL delete all info",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      messages: error.messages,
    });
  }
});

module.exports = router;
