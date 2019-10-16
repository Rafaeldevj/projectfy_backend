/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const RegistroReceita = use('App/Models/RegistroReceita')

class RegistroReceitaController {
  async index() {

    const registros =  await RegistroReceita.query().with('tipoReceita').fetch();

    return registros;
  }

  async store({ request, response }) {

    const data = request.body;

    const registroReceita = await RegistroReceita.create(data);

    return registroReceita;
  }
}

module.exports = RegistroReceitaController
