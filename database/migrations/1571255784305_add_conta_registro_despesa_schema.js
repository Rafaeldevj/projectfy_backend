'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddContaRegistroDespesaSchema extends Schema {
  up () {
    this.table('tb_registro_despesa', (table) => {
      table
        .integer('cd_conta')
        .unsigned()
        .references('cd_conta')
        .inTable('tb_conta')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
        .defaultTo(1)
        .notNullable()
    })
  }

  down () {
    this.table('tb_registro_despesa', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddContaRegistroDespesaSchema
