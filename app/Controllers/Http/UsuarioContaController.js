/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const UsuarioConta = use('App/Models/UsuarioConta')

/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const Usuario = use('App/Models/Usuario')

class UsuarioContaController {
  async index() {

    //return await UsuarioConta.all();

    const usuarioContas = await UsuarioConta.query()
      .with('usuario', builder => {
        builder.select(['cd_usuario', 'nm_usuario', 'nu_valor_total'])
      }).with('conta', builder => {
        builder.select(['cd_conta', 'nm_conta', 'nu_valor'])
      }).fetch();
    
    return usuarioContas;
  }

  async store({ request, response }) {

    const data = request.body;

    const usuarioConta = await UsuarioConta.create(data);

    const usuario =  await Usuario.query().with('contas', builder => {
      builder.select(['nm_conta', 'nu_valor'])
    })
    .withCount('contas')
    .where('cd_usuario', usuarioConta.cd_usuario).fetch()

    let valor_total = 0;

    for (let i = 0; i < usuario.rows[0].$relations.contas.rows.length; i++) {
      //console.log(usuario.rows[0].$relations.contas.rows[i].nu_valor)
      valor_total += usuario.rows[0].$relations.contas.rows[i].nu_valor
    }

    const usuarioAtualizacao = await Usuario.find(usuarioConta.cd_usuario)

    usuarioAtualizacao.nu_valor_total += valor_total

    usuarioAtualizacao.save()

    return usuarioConta;
  }
  
}

module.exports = UsuarioContaController
