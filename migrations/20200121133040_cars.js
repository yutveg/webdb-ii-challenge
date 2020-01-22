exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.integer("VIN");
    tbl.string("model").index();
    tbl.integer("mileage");
    tbl.string("transmission");
    tbl.string("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

//VIN, make, model, and mileage.
//They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
