const router = require("express").Router();
const controller = require("../controllers/task.controller");
const { taskValidationRules, validate } = require("../middlewares/validateRequest");

// Rutas con validacion incluida
router.get("/", controller.getAll);
router.post("/", taskValidationRules, validate, controller.create); 
router.put("/:id", taskValidationRules, validate, controller.update); 
router.delete("/:id", controller.remove);

module.exports = router;
