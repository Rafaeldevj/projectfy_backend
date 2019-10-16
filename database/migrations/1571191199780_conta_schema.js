'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContaSchema extends Schema {
  up () {
    this.create('tb_conta', (table) => {
      table.increments('cd_conta')
      table.string('nm_conta')
      table.float('nu_valor')
      table.timestamps()
    })
  }

  down () {
    this.drop('tb_conta')
  }
}

module.exports = ContaSchema
