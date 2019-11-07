exports.seed = function(knex) {
	return knex('ingredients').insert([
		{ name: 'asada', recipe_id: 1 },
		{ name: 'cilantro', recipe_id: 1 },
		{ name: 'tortilla', recipe_id: 1 },
		{ name: 'onion', recipe_id: 1 },
		{ name: 'red sauce', recipe_id: 2 },
		{ name: 'cheese', recipe_id: 2 },
		{ name: 'bread', recipe_id: 2 },
		{ name: 'blueberries', recipe_id: 3 },
		{ name: 'banana', recipe_id: 3 },
		{ name: 'strawberries', recipe_id: 3 },
		{ name: 'apple juice', recipe_id: 3 }
	]);
};
