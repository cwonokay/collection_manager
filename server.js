const express         = require("express");
const path            = require("path");
const mustacheExpress = require("mustache-express");
const routes          = require("./routes/index");
const morgan          = require("morgan");
const app             = express();
const body            = require("body-Parser");
const validator       =require("express-Validator");

app.use(express.static(path.join(__dirname, "public")));

app.engine("mustache", mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.set('layout', 'layout');

app.use(body.json());
app.use(body.urlencoded({extended: true}));
app.use(validator());

app.use(morgan("dev"));

app.use(routes);

app.listen(3000, function() {
  console.log("App is running!");
})
