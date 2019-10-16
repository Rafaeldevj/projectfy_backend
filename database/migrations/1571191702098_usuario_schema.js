'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('tb_usuario', (table) => {
      table.increments('cd_usuario')
      table.string('nm_usuario').notNullable()
      table.string('nm_login').notNullable()
      table.string('nm_apelido').notNullable()
      table.string('nm_email')
      table.string('nm_senha').notNullable()
      table.float('nu_valor_total').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('tb_usuario')
  }
}

module.exports = UsuarioSchema
