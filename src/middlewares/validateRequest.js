
const { body, validationResult } = require("express-validator");

const taskValidationRules = [
  body("title").notEmpty().withMessage("El título es obligatorio"),
  body("description").notEmpty().withMessage("La descripción es obligatoria")
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { taskValidationRules, validate };
