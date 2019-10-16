'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoReceitaSchema extends Schema {
  up () {
    this.create('tb_tipo_receita', (table) => {
      table.increments('cd_tipo_receita')
      table.string('nm_tipo_receita')
    })
  }

  down () {
    this.drop('tb_tipo_receita')
  }
}

module.exports = TipoReceitaSchema
