
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {

    })
    .createTable('resources', table => {

    })
    .createTable('tasks', table => {

    })
    .createTable('project_resources', table => {

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
