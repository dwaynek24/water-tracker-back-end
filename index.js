
const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8000);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
	res.redirect('/api/watertracker');
});

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});