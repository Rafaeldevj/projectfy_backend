/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const UsuarioConta = use('App/Models/UsuarioConta')

class UsuarioContaController {
  async index() {

    //return await UsuarioConta.all();

    const usuarioContas = await UsuarioConta.query().with('usuario').with('conta').fetch();

    return usuarioContas
  }

  async store() {

    //return await UsuarioConta.all();

    const usuarioContas = await UsuarioConta.query().with('usuario').with('conta').fetch();

    return usuarioContas
  }
}

module.exports = UsuarioContaController
