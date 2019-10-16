/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const TipoReceita = use('App/Models/TipoReceita')

class TipoReceitaController {

  async index() {

    return await TipoReceita.all();
  }

  async show({ request }) {

    const { id } = request.params;

    const tipoReceita = await TipoReceita.find(id)

    if (tipoReceita) {
      
      return tipoReceita;
  
    } else {

      return { cod: 2, msg: 'Tipo de receita não existente' };
    }
  }

  async store({ request }) {
    const data = request.only([
      'nm_tipo_receita'
    ])

    const tipoReceita = await TipoReceita.create(data);

    return tipoReceita;
  }

  async update({ request }) {

    const { cd_tipo_receita, nm_tipo_receita } = request.body;

    const tipoReceita = await TipoReceita.find(cd_tipo_receita)

    tipoReceita.nm_tipo_receita = nm_tipo_receita

    await tipoReceita.save()

    return tipoReceita
  }

  async destroy({ request }) {

    const { id } = request.params;

    const tipoReceita = await TipoReceita.find(id)

    await tipoReceita.delete()
  }
}

module.exports = TipoReceitaController
