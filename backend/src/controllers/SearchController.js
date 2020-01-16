const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async index(req, res) {
    //buscar 10km
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);
    console.log(techsArray);

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
          $maxDistance: 50000
        }
      }
    });

    return res.status(200).json({ devs });
  }
};
