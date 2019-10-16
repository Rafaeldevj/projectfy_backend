'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RegistroReceita extends Model {

    static get primaryKey() {

        return 'cd_registro_receita'
    }

    static get table() {

        return 'tb_registro_receita'
    }

    tipoReceita () {
        return this.belongsTo('App/Models/TipoReceita', 'cd_tipo_receita')
    }
}

module.exports = RegistroReceita
