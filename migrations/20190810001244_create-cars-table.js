
exports.up = function(knex) {
  return knex.schema.createTable('cars' , tbl => {
        tbl.increments();
        tbl.text('makeOfCar', 128)
        .notNullable();
        tbl.text('model', 128)
        .notNullable();
        tbl.string('vinNumber', 255)
        .unique()
        .notNullable();
        tbl.string('milageOfCar', 255)
        .notNullable();
        tbl.text('TransmissionType', 128)
        tbl.text('titleStatus', 128)

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
