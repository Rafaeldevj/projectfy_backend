'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoRegistroSchema extends Schema {
  up () {
    this.create('tb_tipo_registro', (table) => {
      table.increments('cd_tipo_registro')
      table.string('nm_tipo_registro')
    })
  }

  down () {
    this.drop('tb_tipo_registro')
  }
}

module.exports = TipoRegistroSchema
