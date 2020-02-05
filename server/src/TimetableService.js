import express from 'express'
import es6Request from 'es6-request'
import xml2js from 'xml2js'
import moment from "moment";

const router = express.Router();

router.get(['/list', '/list/:date'], (request, response) => {
  let {params, user} = request
  let {date} = params
  let dateString = ((date === undefined) ? moment().format("YYYYMMDD"): date)
  try {
    let searchUrl = "https://www.stundenplan24.de/30076450/vplan/vdaten/VplanKl" + dateString + ".xml"
    es6Request.get(searchUrl)
      .authBasic("schueler", "S435e93")
      .then(([body, res]) => {
        response.type("application/json");

        if (res.statusCode === 200) {
          response.status( res.statusCode );
          xml2js.parseString(body, function (err, result) {
            result.statusCode = res.statusCode
            response.send( JSON.stringify(result) );
          });
        } else {
          response.status( res.statusCode );
          response.send( JSON.stringify({error: "not found"}) );
        }

        // should output this README file!
      });
  } catch (e) {
    response.status(500).send(e.toString());
  }
});


export default router
