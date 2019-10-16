'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoDespesaSchema extends Schema {
  up () {
    this.create('tb_tipo_despesa', (table) => {
      table.increments('cd_tipo_despesa')
      table.string('nm_tipo_despesa')
    })
  }

  down () {
    this.drop('tb_tipo_despesa')
  }
}

module.exports = TipoDespesaSchema
