/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const RegistroDespesa = use('App/Models/RegistroDespesa')

/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const Usuario = use('App/Models/Usuario')

class RegistroDespesaController {
  async index() {

    const registros = await RegistroDespesa.query()
      .with('tipoDespesa')
      .with('conta').fetch();

    return registros;
  }

  async store({ request, response }) {

    const data = request.body;
    const { cd_usuario } = request.headers()

    const registroDespesa = await RegistroDespesa.create(data);

    const usuarioAtualizacao = await Usuario.find(cd_usuario)

    usuarioAtualizacao.nu_valor_total -= registroDespesa.nu_valor

    usuarioAtualizacao.save()

    return registroDespesa;
  }
}

module.exports = RegistroDespesaController
