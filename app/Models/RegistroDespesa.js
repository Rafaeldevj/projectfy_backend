'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RegistroDespesa extends Model {

    static get primaryKey() {

        return 'cd_registro_despesa'
    }

    static get table() {

        return 'tb_registro_despesa'
    }

    tipoDespesa () {
        return this.belongsTo('App/Models/TipoDespesa', 'cd_registro_despesa')
    }
}

module.exports = RegistroDespesa
