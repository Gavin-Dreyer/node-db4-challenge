const express = require('express');

const recipesM = require('./recipes-model.js');

const server = express();

server.use(express.json());

server.get('/recipes', (req, res) => {
	recipesM
		.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get recipes' });
		});
});

server.get('/recipes/:id/shoplist', (req, res) => {
	recipesM
		.getShoppingList(req.params.id)
		.then(list => {
			res.json(list);
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: 'Failed to get ingredients list with quantities' });
		});
});

server.get('/recipes/:id/instructions', (req, res) => {
	recipesM
		.getInstructions(req.params.id)
		.then(steps => {
			res.json(steps);
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: 'Failed to get ingredients list with steps' });
		});
});

module.exports = server;
