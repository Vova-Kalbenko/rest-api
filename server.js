const mongoose = require('mongoose');
const dotenv = require('dotenv'); 


dotenv.config();

const app = require('./app');

const { DB_HOST } = process.env;

const PORT = process.env.PORT || 5001;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log (`Connect on port : ${PORT}`);
      console.log (`Database connect success`)
    })
  })
  .catch((error) => {
    console.log(error.message)
    process.exit(1)
  });