import { SignUpController } from './signup'

describe('SignUp Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                // name: 'any_name',
                emial: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpsResponse = sut.handle(httpRequest)
        expect(httpsResponse.statusCode).toBe(400)
    })
})