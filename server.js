const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const userRoutes= require('./app/routes/user.routes')
const formRoutes=require('./app/routes/form.routes')


const db = require("./app/models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
  
db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/user',userRoutes)
app.use('/form',formRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Server is up." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
