const { test, trait } = use('Test/Suite')('Session');

/**@type {typeof import ('@adonisjs/lucid/src/Lucid/model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('it should return JWT token when session created', async ({ assert, client }) => {

    const user = await User.create({
        name: 'Rafael Vasconcelos',
        email: 'rafael11dev@gmail.com',
        password: 'r12345'
    });

    const response = await client.post('/sessions').send({
        email: 'rafael11dev@gmail.com',
        password: 'r12345'
    }).end()

    console.log(response.body)

    response.assertStatus(200) 
    assert.exists(response.body.token)
})