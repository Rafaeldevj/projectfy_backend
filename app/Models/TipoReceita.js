'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoReceita extends Model {

    static get primaryKey() {

        return 'cd_tipo_receita'
    }

    static get table() {

        return 'tb_tipo_receita'
    }

    static get createdAtColumn () {
        
        return null
    }

    static get updatedAtColumn () {
        
        return null
    }
}

module.exports = TipoReceita
