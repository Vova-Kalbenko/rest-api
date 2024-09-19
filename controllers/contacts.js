// CONTROLLERS ЭТО ПУТЕВОДИТЕЛИ, ПРОЦЕССУАЛЬНЫЕ ФУКЦИИ, ОПРЕДЕЛЯЮЩИЕ ПОРЯДОК И ПУТЬ ОБРАБОТКИ ЗАПРОСОВ
const contacts = require("../models/contacts"); // импорт контактов
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result); // json - то же самок что и  send ток с расспарсом
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Nothing found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(400, "Nothing found");
  }
  res.json({
    message: "Deleted",
  });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Nothing found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
};