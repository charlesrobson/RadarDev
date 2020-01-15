const Dev = require("../models/Dev");
const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const devExists = await Dev.findOne({ github_username });
    if (devExists) {
      return res
        .status(400)
        .json({ msg: `Dev ${github_username} já cadastrado` });
    }
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const { name = login, bio, avatar_url } = response.data;
    const techsArray = parseStringAsArray(techs);
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      name,
      github_username,
      bio,
      avatar_url,
      techs: techsArray,
      location
    });

    return res.status(200).json({ dev });
  },
  async index(req, res) {
    const devs = await Dev.find({});
    return res.status(200).json({ devs });
  }
};
