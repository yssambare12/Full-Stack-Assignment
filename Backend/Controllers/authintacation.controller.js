require("dotenv").config();

const jwt = require("jsonwebtoken");

const User = require("../models/singerdata.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, "masai");
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user)
      return res.status(400).json({
        status: "failed",
      });

      router.post('/', async (req, res) => {
        try { 
            const artistData = await Artist.create(req.body);
            res.status(200).json({artistData:artistData})
        } catch (e) {
            res.status(500).json({ Staus: "Not Open",error:e.message });
        }
    })
    
    router.get("/", async (req, res) => {
      try {
        const artistsData = await Artist.find().lean().exec();
        res.status(200).json({ artistsData: artistsData });
      } catch (e) {
        res.status(500).json({ Staus: "failed", error: e.message });
      }
    });

    user = await User.create(req.body);

    const token = newToken(user);

    res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });

    const match = await user.checkPassword(req.body.password);

    if (!match)
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });

    const token = newToken(user);

    res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

module.exports = { register, login, newToken };


