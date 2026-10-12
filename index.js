const express = require('express');
const app = express();
const numberRouter = require('./app'); // Import your app.js module

app.use('/api', numberRouter);

const PORT = 0;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
