'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Conta extends Model {

    static get primaryKey() {

        return 'cd_conta'
    }

    static get table() {

        return 'tb_conta'
    }

}

module.exports = Conta
