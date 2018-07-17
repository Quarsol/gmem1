const knex = require('./knexConfig.js')

module.exports = {
    list(){
      return knex('resolution')
        .select()
        .orderBy('id')
    },
    read(id){
      return knex('resolution')
        .select()
        .where('id', id).first()
    },
    create(resolution){
      return knex('resolution')
        .select()
        .insert(resolution)
        .returning('*')
    },
    update(id, resolution){
      return knex('resolution')
        .select()
        .where('id', id)
        .update(resolution)
        .returning('*')
    },
    delete(id){
      return knex('resolution')
        .select()
        .delete()
        .where('id', id)
    }
};
