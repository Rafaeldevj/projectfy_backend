'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/sessions', 'SessionController.store')


//Rotas para Tipo de Receita
Route.group(() => {

  Route.post('', 'TipoReceitaController.store')
  Route.get('', 'TipoReceitaController.index')
  Route.get('/:id', 'TipoReceitaController.show')
  Route.put('', 'TipoReceitaController.update')
  Route.delete('/:id', 'TipoReceitaController.destroy')

}).prefix('/api/tipoReceita')

//Rotas para Tipo de Despesa
Route.group(() => {

  Route.get('', 'TipoDespesaController.index')
  Route.post('', 'TipoDespesaController.store')
  Route.get('/:id', 'TipoDespesaController.show')
  Route.put('', 'TipoDespesaController.update')
  Route.delete('/:id', 'TipoDespesaController.destroy')

}).prefix('/api/tipoDespesa')

//Rotas para Tipo de Despesa
Route.group(() => {

  Route.get('', 'TipoRegistroController.index')

}).prefix('/api/tipoRegistro')

//Rotas para Registro de Receita
Route.group(() => {

  Route.get('', 'RegistroReceitaController.index')
  Route.post('', 'RegistroReceitaController.store')

}).prefix('/api/registroReceita')

//Rotas para Registro de Despesa
Route.group(() => {

  Route.get('', 'RegistroDespesaController.index')
  Route.post('', 'RegistroDespesaController.store')

}).prefix('/api/registroDespesa')

//Rotas para Conta
Route.group(() => {

  Route.get('', 'ContaController.index')
  Route.get('/:id', 'ContaController.show')
  Route.post('', 'ContaController.store')
  Route.put('', 'ContaController.update')
  Route.delete('/:id', 'ContaController.destroy')

}).prefix('/api/conta')

//Rotas para Usário
Route.group(() => {

  Route.get('', 'UsuarioController.index')
  Route.get('/:id', 'UsuarioController.show')
  Route.post('', 'UsuarioController.store')
  //Route.put('', 'UsuarioController.update')
  //Route.delete('/:id', 'UsuarioController.destroy')

}).prefix('/api/usuario')

//Rotas para UsarioConta
Route.group(() => {

  Route.get('', 'UsuarioContaController.index')

}).prefix('/api/usuario_conta')