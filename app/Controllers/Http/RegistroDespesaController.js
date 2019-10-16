/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const RegistroDespesa = use('App/Models/RegistroDespesa')

class RegistroDespesaController {
  async index() {

    const registros =  await RegistroDespesa.query().with('tipoDespesa').fetch();

    return registros;
  }

  async store({ request, response }) {

    const data = request.body;

    const registroDespesa = await RegistroDespesa.create(data);

    return registroDespesa;
  }
}

module.exports = RegistroDespesaController
