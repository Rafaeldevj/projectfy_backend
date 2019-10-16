'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistroDespesaSchema extends Schema {
  up () {
    this.create('tb_registro_despesa', (table) => {
      table.increments('cd_registro_despesa')
      table
        .integer('cd_tipo_despesa')
        .unsigned()
        .references('cd_tipo_despesa')
        .inTable('tb_tipo_despesa')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
        .notNullable()
      table.float('nu_valor', 10, 2).notNullable()
      table.date('dt_despesa').notNullable()
      table.text('ds_descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('tb_registro_despesa')
  }
}

module.exports = RegistroDespesaSchema
