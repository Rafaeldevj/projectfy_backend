'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {

    static get hidden () {
        return ['nm_senha']
    }

    static get primaryKey() {

        return 'cd_usuario'
    }

    static get table() {

        return 'tb_usuario'
    }

    contas () {
        return this
            .belongsToMany('App/Models/Conta', 'cd_usuario', 'cd_conta', 'cd_usuario', 'cd_conta')
            .pivotTable('tb_usuario_conta')
            .pivotModel('App/Models/UsuarioConta')
                
    }
}

module.exports = Usuario
