const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require('./config/db.config');
dbConfig();
const cors = require("cors");

const recipeRouter=require('./app/routes/recipe.route');

const port = process.env.PORT || 8080;

// const corsOptions = {
//   origin: process.env.ORIGIN || 'http://localhost:8081',
// };

app.use(cors());

//parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', recipeRouter);


app.listen(port, async () => {
  console.log(`Server Listeining on ${port}`);
});