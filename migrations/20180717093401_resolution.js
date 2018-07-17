
exports.up = function(knex) {
  return knex.schema.createTable('resolution', (table) => {
    table.increments();
    table.date('dueDate');
    table.string('resolution');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('resolution');
};
