const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

router.get("/", async (req, res) => {
  try {
    const image = await Image.find();
    res.status(200).json({
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    res.status(200).json({
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const image = new Image(req.body);
    const newimage = await image.save();

    res.status(200).json({
      data: newimage,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(400).json({ message: "Image does not exist" });
    }
    image.task = req.body.task || image.task;
    
  
    const updatedImage = await image.save();

    res.status(200).json({
      data: updatedImage,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Image.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Image is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
