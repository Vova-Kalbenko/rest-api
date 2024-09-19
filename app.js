const express = require('express') // для создания веб-сервера
const logger = require('morgan') // для логирования ошибок
const cors = require('cors')  // для кросс-доменных запросов 

const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter) // все запросы по апи-контактс искат в contactsRouter

app.use((req, res) => {
  res.status(404).json({ message: 'Nothing found' })
})
// ЕДИНСТВЕННАЯ ФУНКЦИЯ ОБРАБОТКИ ОШИБОК С 4-МЯ ПАРАМЕТРАМИ  и ГДЕ Б МЫ НЕ СДЕЛАЛИ ОШИБКУ НЕКСТ() БУДЕТ ИСКАТЬ ФУНК С 4 ПАРАМЕТРАМИ
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
})

module.exports = app