const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async index(req, res) {
    //buscar 10km
    console.log(req.query);

    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        //make mongo accept partials! -= not only all match
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 20000
        }
      }
    });

    return res.status(200).json({ devs });
  }
};
