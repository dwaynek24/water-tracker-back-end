const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
	res.redirect('/api/watertracker');
});

/* START CONTROLLERS HERE */

const usersController = require('./controllers/usersController');
app.use('/api/users/', usersController);

/* END CONTROLLERS HERE */



app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});
//==== Start Server ====//
app.listen(PORT, () => console.log('Our API is listening on port: ' + PORT));