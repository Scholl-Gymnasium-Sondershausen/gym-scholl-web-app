"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _TimetableService = _interopRequireDefault(require("./TimetableService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use("/static-files", _express.default.static(_path.default.join(__dirname + '../../../build')));
app.use("/assets", _express.default.static(_path.default.join(__dirname + '../../../build/assets')));
app.use("/static", _express.default.static(_path.default.join(__dirname + '../../../build/static')));
app.use("/timetable-service", _TimetableService.default);
app.get('/', (req, res) => {
  res.sendFile(_path.default.join(__dirname + '../../../build/index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(_path.default.join(__dirname + '../../../build/index.html'));
});
app.get('/assets/*', (req, res) => {
  res.sendFile(_path.default.join(__dirname + '../../../build/index.html'));
});
const port = process.env.PORT || 4000;
app.listen(port);