const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  userLogin,
} = require("../controllers/UserController");
const router = express.Router();

// Ruta de prueba
router.get("/", (req, res) => {
  res.send({ message: "Hola mundo ruta principal" });
});

//  Operaciones CRUD
// crear usuario -C
router.post("/createUser", createUser);
// // actualizar usuario -A
router.put("/update-user/:id", updateUser);
// // eliminar usuario -E
router.delete("/deleteUser/:id", deleteUser);
// Logear usuario
router.post("/log-in", userLogin);

module.exports = router;
