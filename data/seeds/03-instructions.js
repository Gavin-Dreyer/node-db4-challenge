exports.seed = function(knex) {
	return knex('instructions').insert([
		{ step: 'heat 2 tortillas', recipe_id: 1, ingredient_id: 3 },
		{
			step: 'add cooked & seasoned asada',
			quantityGrams: 50,
			recipe_id: 1,
			ingredient_id: 1
		},
		{ step: 'add cilantro', quantityGrams: 10, recipe_id: 1, ingredient_id: 2 },
		{
			step: 'sprinkle diced onion',
			quantityGrams: 10,
			recipe_id: 1,
			ingredient_id: 4
		},
		{
			step: 'knead dough',
			quantityGrams: 450,
			recipe_id: 2,
			ingredient_id: 7
		},
		{
			step: 'add red saice',
			quantityGrams: 200,
			recipe_id: 2,
			ingredient_id: 5
		},
		{
			step: 'add cheese and bake',
			quantityGrams: 200,
			recipe_id: 2,
			ingredient_id: 6
		},
		{
			step: 'add blueberries',
			quantityGrams: 100,
			recipe_id: 3,
			ingredient_id: 8
		},
		{
			step: 'add banana',
			quantityGrams: 100,
			recipe_id: 3,
			ingredient_id: 9
		},
		{
			step: 'add strawberries',
			quantityGrams: 100,
			recipe_id: 3,
			ingredient_id: 10
		},
		{
			step: 'add applejuice',
			quantityGrams: 150,
			recipe_id: 3,
			ingredient_id: 11
		}
	]);
};
