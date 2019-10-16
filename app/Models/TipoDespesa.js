'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoDespesa extends Model {

    static get primaryKey() {

        return 'cd_tipo_despesa'
    }

    static get table() {

        return 'tb_tipo_despesa'
    }

    static get createdAtColumn () {
        
        return null
    }

    static get updatedAtColumn () {
        
        return null
    }
}

module.exports = TipoDespesa
