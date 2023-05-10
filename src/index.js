const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/routes.js');

require('dotenv-safe').config();

app.use(express.json());


app.use('/', router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});