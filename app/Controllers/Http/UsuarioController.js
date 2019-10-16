/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const Usuario = use('App/Models/Usuario')
const Encryption = use('Encryption')

class UsuarioController {
  async index() {

    //const usuarios = await Usuario.all();

    const usuarios =  await Usuario.query().with('contas').fetch();

    return usuarios;
  }

  async show({ request }) {

    const { id } = request.params;

    const usuario =  await Usuario.query().with('contas').where('cd_usuario', id).fetch();

    for (let i = 0; i < usuario.rows[0].$relations.contas.rows.length; i++) {
      console.log(usuario.rows[0].$relations.contas.rows[i].nu_valor)
    }

    return usuario;
  }

  async store({ request, response }) {

    const data = request.body;

    data.nm_senha = Encryption.encrypt(data.nm_senha)

    const usuario = await Usuario.create(data);

    return usuario;
  }
}

module.exports = UsuarioController
