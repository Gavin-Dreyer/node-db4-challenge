const db = require('./data/db-config.js');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};

function getRecipes() {
	return db('recipes');
}

function getShoppingList(id) {
	return db
		.select('name', 'instructions.quantityGrams')
		.from('ingredients')
		.join('instructions', 'ingredients.id', '=', 'instructions.ingredient_id')
		.where('ingredients.recipe_id', '=', id);
}

function getInstructions(id) {
	return db
		.select('step', 'quantityGrams')
		.from('instructions')
		.join('ingredients', 'ingredients.id', '=', 'instructions.ingredient_id')
		.where('ingredients.recipe_id', '=', id);
}

// select step, quantityGrams, ingredients.name from instructions
// join ingredients
// on ingredients.id = instructions.ingredient_id;
