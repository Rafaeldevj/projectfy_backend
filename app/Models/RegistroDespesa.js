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
        return this.belongsTo('App/Models/TipoDespesa', 'cd_tipo_despesa')
    }

    conta () {
        return this.belongsTo('App/Models/Conta', 'cd_conta')
    }
}

module.exports = RegistroDespesa
