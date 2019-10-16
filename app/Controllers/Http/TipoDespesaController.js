/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const TipoDespesa = use('App/Models/TipoDespesa')

class TipoDespesaController {
  
  async index() {

    return await TipoDespesa.all();
  }

  async show({ request }) {

    const { id } = request.params;

    const tipoDeceita = await TipoDespesa.find(id)

    if (tipoDeceita) {
      
      return tipoDeceita;
  
    } else {

      return { cod: 2, msg: 'Tipo de despesa não existente' };
    }
  }

  async store({ request  }) {
    const data = request.only([
      'nm_tipo_despesa'
    ])

    const tipoDespesa = await TipoDespesa.create(data);

    return tipoDespesa;
  }

  async update({ request }) {

    const { cd_tipo_despesa, nm_tipo_despesa } = request.body;

    const tipoDespesa = await TipoDespesa.find(cd_tipo_despesa)

    tipoDespesa.nm_tipo_despesa = nm_tipo_despesa

    await tipoDespesa.save()

    return tipoDespesa
  }

  async destroy({ request }) {

    const { id } = request.params;

    const tipoDespesa = await TipoDespesa.find(id)

    await tipoDespesa.delete()
  }

}

module.exports = TipoDespesaController
