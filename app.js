const express= require('express');
const app = express();
const data = require('./data.json');


//Use Pug
app.set('view engine', 'pug');

//Serve static files
app.use('/static', express.static('public'));

//Route to homepage
app.get('/', (req, res) => {
    res.render('index', {data});
});

//Route to about page
app.get('/about', (req, res) => {
    const twitter = 'https://twitter.com/whalbee'
    const linkedIn = 'https://www.linkedin.com/in/will-albertsen-a976a7191/'
    const gitHub = 'https://github.com/schnauzerPower'
    const templateData = {gitHub, linkedIn, twitter};
    res.render('about', templateData);
});

//Route to all of the project pages
app.get('/project/:id(\[0-5])/', (req, res) => {
    const {id} = req.params
    res.render('project', {data, id})
});

//Error middleware
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

//Display app on localhost
app.listen(3000, () => {
    console.log("The app is now running on localhost!");
});