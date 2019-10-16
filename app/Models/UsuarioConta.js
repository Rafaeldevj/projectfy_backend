'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioConta extends Model {

    static get primaryKey() {

        return 'cd_usuario_conta'
    }

    static get table() {

        return 'tb_usuario_conta'
    }

    usuario () {
        return this.belongsTo('App/Models/Usuario', 'cd_usuario')
    }

    conta () {
        return this.belongsTo('App/Models/Conta', 'cd_conta')
    }
}

module.exports = UsuarioConta
