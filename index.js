const express = require('express');
const app = express();
const numberRouter = require('./app'); // Import your app.js module

app.use('/api', numberRouter);

app.listen(3000, () => console.log('Server listening on port 3000'));
