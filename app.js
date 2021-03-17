const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fs = require('fs');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'visited-routes.txt');
const port = process.env.PORT || 3000;

const homeRoutes = require('./routes/home');
const sortingRoutes = require('./routes/sort');
const fibonacciRoutes = require('./routes/fibonacci');
const sumRoutes = require('./routes/sum');
const minMaxRoutes = require('./routes/min-max');
const searchRoutes = require('./routes/search');
const errorController = require('./controllers/404');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    const message = { method: req.method, url: req.url, time: new Date(), ip: req.ip };
    fs.appendFile(_path, JSON.stringify(message), (err) => {
        err && console.log(err);
    });
    next();
});

app.use("/", homeRoutes);
app.use("/sorting", sortingRoutes);
app.use("/fibonacci", fibonacciRoutes);
app.use("/sums", sumRoutes);
app.use("/min-max", minMaxRoutes);
app.use("/search", searchRoutes);
app.use(errorController.get404Page);

app.listen(port, (err) => {
    err ? console.log(`Error starting server on port: ${port}`)
        : console.log(`Listening on port: ${port}`);
});