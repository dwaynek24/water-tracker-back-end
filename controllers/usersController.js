//controllers/bookmarksController.js
// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the bookmark model
const User = require('../models/User');

// Add routes to the router object
// Index: GET all the bookmarks
// Index: GET all the bookmarks
// ==== CREATE CRUD OPERATIONS ====

// GET
router.get('/', (req, res, next) => {
	User.find({})
		.then((users) => res.json(users))
		.catch(next);
});

// GET CHEATSHEET BY ID
router.get('/id/:id', (req, res, next) => {
	CheatSheet.findById(req.params.id)
		.then((users) => res.json(users))
		.catch(next);
});

// GET BY NAME
router.get('/name/:name', async(req, res, next)=>{
	try{
		const findAll = await User.find({})
		if(!findAll) return res.status(404).send('Error, cannot be found')

		const filtered = findAll.filter((users)=>{
			if (!users.title) return;
			return (users.name.toLowerCase().includes((req.params.name).toLowerCase()))
		})
		res.status(200).send(filtered)
	}
	catch(err){
		next(err)
	}
})

// CREATE
router.post('/', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		const allUsers = await User.find({});
		res.status(201).json(allUsers);
	} catch (err) {
		next(err);
	}
});


// UPDATE
router.put('/:id', async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		const allUsers = await User.find({});
		res.status(201).json(allUsers);
	} catch (err) {
		next(err);
	}
});

// DELETE
router.delete('/:id', async (req, res, next) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		const allUsers = await User.find({});
		res.json(allUsers);
	} catch (err) {
		next(err);
	}
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;