const express = require('express');
const sass = require('@darius2652/sass-middleware')();
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'template'));

sass.Hook(app);

app.get('/', (req, res) => {
  return res.render('index');
})

app.listen(8080, () => {
  console.log(`Burgr listening on port 8080`);
})