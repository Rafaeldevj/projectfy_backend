/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const TipoRegistro = use('App/Models/TipoRegistro')

class TipoRegistroController {
 
  async index() {

    return await TipoRegistro.all();
  }

}

module.exports = TipoRegistroController
