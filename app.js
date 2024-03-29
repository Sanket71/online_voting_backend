const express = require('express');
const voterRouter = require('./routes/voterRoutes');
const dotenv = require('dotenv');
const voterController = require('./controller/voterController');
dotenv.config({ path: './config.env' });
const app = express();

app.get('/check', (req, res) => {
  res
    .status(200)
    .json({
      message: 'Hello0000 from the server side ',
      Project: 'Online voting',
    });
});

app.use('/api/v1/voter', voterRouter);

module.exports = app;
