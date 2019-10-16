'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioContaSchema extends Schema {
  up () {
    this.create('tb_usuario_conta', (table) => {
      table.increments('cd_usuario_conta')
      table
        .integer('cd_usuario')
        .unsigned()
        .references('cd_usuario')
        .inTable('tb_usuario')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
        .notNullable()
      table
        .integer('cd_conta')
        .unsigned()
        .references('cd_conta')
        .inTable('tb_conta')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
        .notNullable()
    })
  }

  down () {
    this.drop('tb_usuario_conta')
  }
}

module.exports = UsuarioContaSchema
