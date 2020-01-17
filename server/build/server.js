"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use("/static-files", _express.default.static(_path.default.join(__dirname + '../../../build')));
app.get('/', (req, res) => {
  res.sendFile(_path.default.join(__dirname + '../../../build/index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(_path.default.join(__dirname + '../../../build/index.html'));
});
const port = process.env.PORT || 1337;
app.listen(port);