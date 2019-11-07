exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.string('name', 255).notNullable();
		})
		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.string('name', 255).notNullable();
			tbl
				.integer('recipe_id')
				.unsigned()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		})
		.createTable('instructions', tbl => {
			tbl.increments();
			tbl.string('step', 255).notNullable();
			tbl.float('quantityGrams');
			tbl
				.integer('recipe_id')
				.unsigned()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('instructions')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
