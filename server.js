const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
          firstName: 'Shawn',
          lastName: 'Taylor',
        }
      }

    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body })
  });
  var port = process.env.PORT || 8080;

  app.listen(port);
  