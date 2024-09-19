// ТУТ МЫ ОПИСЫВАЕМ СХЕМЫ ВАЛИДАЦИИ ДАННЫХ ДЛЯ РОУТОВ
const Joi = require("joi"); // либа для валидации данных для отправки

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = {
    addSchema,
}
