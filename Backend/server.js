// crear nuestra variable de tipo express
const express = require("express");
const app = express();
const port = 3001;
const stringConnection = require("./db/dbConnection");
const mongose = require("mongoose");
// Importar el objeto para las rutas de las API rest -EndPoints
const router = require("./routes/router");

// conexion a la BD
mongose
  .connect(stringConnection)
  .then(() => console.log("servidor MongoDb On"))
  .catch((err) => console.log("error de conexcion" + err));
// Importacion del modelo user
const User = require("./models/UserModel");
const { discriminators } = require("./models/UserModel");

// BodyParses proceso para convertir las http en formato json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// levantar el servidor
app.use("/api/v1", router);
app.listen(port, () => {
  console.log(`servidor funcionando en el puesto ${port}`);
});
