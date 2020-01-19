exports.up = function(knex) {
    return knex.schema.createTable("funstuff", table =>{
        table.increments();
        table.string("fun_thing")
          .notNullable()
          .unique();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("funstuff");
  };