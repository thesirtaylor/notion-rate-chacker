const { default: axios } = require("axios");
let HTTP_STATUS = require("../helpers/response/httpStatusCode");

module.exports = {
  rate: async (req, res) => {
    try {
      if (Object.keys(req.query).length === 0) {
        let { data } = await axios.get(
          "https://api.exchangeratesapi.io/latest"
        );
        return res.status(HTTP_STATUS.FOUND).json({
          result: data,
        });
      }
      let query = req.query.currency;
      nquery = query.split(",");
      let { data } = await axios.get("https://api.exchangeratesapi.io/latest", {
        params: { base: req.query.base },
      });
      let sas = {};
      await nquery.forEach((n) => (sas[n] = data.rates[n]));
      console.log(data);
      return res.status(HTTP_STATUS.FOUND).json({
        results: { base: req.query.base, date: data.date, rates: sas },
      });
    } catch (error) {
      // console.log(error);
      console.log(error);
      return res.status(HTTP_STATUS.BAD_REQUEST).json(error.message);
    }
  },
};
