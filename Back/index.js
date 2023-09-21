const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const cors = require('cors')

const app = express();

app.set("views", path.join(__dirname, "/front"));
app.set("view engine", "html");
nunjucks.configure(path.join(__dirname, "./front"), {
  autoescape: true,
  express: app
});

app.use(cors({
  origin: true
}))

app.use(
  express.static(path.join(__dirname, "/.public"), { maxAge: 31536000000 })
);

app.use(require("./app/routes")(app));

app.listen(1337, () => {
  console.log(`Server started ➜ http://localhost:1337`);
});


module.exports = app;