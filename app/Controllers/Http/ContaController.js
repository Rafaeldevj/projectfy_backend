/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const Conta = use('App/Models/Conta')

class ContaController {
  async index() {

    return await Conta.all();
  }

  async show({ request }) {

    const { id } = request.params;

    const conta = await Conta.find(id)

    if (conta) {
      
      return conta;
  
    } else {

      return { cod: 2, msg: 'Conta não existente' };
    }
  }

  async store({ request, response }) {

    const data = request.body;

    const conta = await Conta.create(data);

    return conta;
  }

  async update({ request }) {

    const { cd_conta, nm_conta, nu_valor } = request.body;

    const conta = await Conta.find(cd_conta);

    conta.nm_conta = nm_conta;
    conta.nu_valor = nu_valor;

    await conta.save();

    return conta;
  }

  async destroy({ request }) {

    const { id } = request.params;

    const conta = await Conta.find(id)

    await conta.delete()
  }
}

module.exports = ContaController
