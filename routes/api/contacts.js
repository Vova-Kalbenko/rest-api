// РОУТЫ ЭТО ПЕРВЫЙ ЭТАП ДЛЯ БЭКА
const express = require("express"); // подключаем веб-серрвер
const router = express.Router(); // создаем часть работы с ним по контактам (лист из телеф книги)
const ctrl = require('../../controllers/contacts') // для имплементации фукций-обработчиков запросов
const { validateBody } = require('../../middlewares');// для имплементации валидации получаемых и отправляемых данных
const schemas = require('../../schemas/contacts'); // импорт схемы валидации данных

router.get("/", ctrl.getAll); // ПО ЗАПРОСУ РОУТА НА ОСН СТАРНИЦУ ВЫЗОВИ МЕТОД getAll

router.get("/:contactId", ctrl.getById);// ПО АНАЛОГИИ

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);// ПО АНАЛОГИИ

router.delete("/:contactId", ctrl.removeContact);// ПО АНАЛОГИИ

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);// ПО АНАЛОГИИ

module.exports = router;