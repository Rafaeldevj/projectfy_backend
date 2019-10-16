'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistroReceitaSchema extends Schema {
  up () {
    this.create('tb_registro_receita', (table) => {
      table.increments('cd_registro_receita')
      table
        .integer('cd_tipo_receita')
        .unsigned()
        .references('cd_tipo_receita')
        .inTable('tb_tipo_receita')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
        .notNullable()
      table.float('nu_valor', 10, 2).notNullable()
      table.date('dt_receita').notNullable()
      table.text('ds_descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('tb_registro_receita')
  }
}

module.exports = RegistroReceitaSchema
