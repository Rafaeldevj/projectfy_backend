/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const RegistroReceita = use('App/Models/RegistroReceita')

/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const Usuario = use('App/Models/Usuario')

class RegistroReceitaController {
  async index() {

    const registros =  await RegistroReceita.query().with('tipoReceita').fetch();

    return registros;
  }

  async store({ request, response }) {

    const data = request.body;
    const { cd_usuario } = request.headers()

    const registroReceita = await RegistroReceita.create(data);

    const usuarioAtualizacao = await Usuario.find(cd_usuario)

    usuarioAtualizacao.nu_valor_total += registroReceita.nu_valor

    usuarioAtualizacao.save()

    return registroReceita;
    
  }
}

module.exports = RegistroReceitaController
