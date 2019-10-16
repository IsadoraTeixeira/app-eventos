const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;

//SET HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = 'hello there,this is other stuff';

//SET HANDLEBARS FOLDER
app.get('/', function (req, res) {
	res.render('home', {
		stuff: otherstuff
	});
});

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));