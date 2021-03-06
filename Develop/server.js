const express = require('express');
const path = require('path');
const htmlRoutes = require('./Routes/html');
const routesApi = require('./Routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', routesApi);
app.use('/', htmlRoutes);
app.listen(PORT, function(){
    console.log(`Listening on PORT: ${PORT}`);
});
