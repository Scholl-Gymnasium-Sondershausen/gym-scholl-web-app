"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _es6Request = _interopRequireDefault(require("es6-request"));

var _xml2js = _interopRequireDefault(require("xml2js"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get(['/list', '/list/:date'], (request, response) => {
  let {
    params,
    user
  } = request;
  let {
    date
  } = params;
  let dateString = date === undefined ? (0, _moment.default)().format("YYYYMMDD") : date;

  try {
    let searchUrl = "https://www.stundenplan24.de/30076450/vplan/vdaten/VplanKl" + dateString + ".xml";

    _es6Request.default.get(searchUrl).authBasic("schueler", "S435e93").then(([body, res]) => {
      response.type("application/json");

      if (res.statusCode === 200) {
        response.status(res.statusCode);

        _xml2js.default.parseString(body, function (err, result) {
          result.statusCode = res.statusCode;
          response.send(JSON.stringify(result));
        });
      } else {
        response.status(res.statusCode);
        response.send(JSON.stringify({
          error: "not found"
        }));
      } // should output this README file!

    });
  } catch (e) {
    response.status(500).send(e.toString());
  }
});
var _default = router;
exports.default = _default;