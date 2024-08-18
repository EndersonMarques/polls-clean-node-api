import { SignUpController } from './signup'
import { MissignParamnsError } from '../errors/missing-params-erro'

describe('SignUp Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpsResponse = sut.handle(httpRequest)
        expect(httpsResponse.statusCode).toBe(400)
        expect(httpsResponse.body).toEqual(new MissignParamnsError('name'))
    })

    test('Should return 400 if no email is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpsResponse = sut.handle(httpRequest)
        expect(httpsResponse.statusCode).toBe(400)
        expect(httpsResponse.body).toEqual(new MissignParamnsError('email'))
    })

    test('Should return 400 if no password is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'any_email@mail.com',
                name: 'any_name',
                passwordConfirmation: 'any_password',
            }
        }
        const httpsResponse = sut.handle(httpRequest)
        expect(httpsResponse.statusCode).toBe(400)
        expect(httpsResponse.body).toEqual(new MissignParamnsError('password'))
    })

    test('Should return 400 if no passwordConfirmation is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'any_email@mail.com',
                name: 'any_name',
                password: 'any_password',
            }
        }
        const httpsResponse = sut.handle(httpRequest)
        expect(httpsResponse.statusCode).toBe(400)
        expect(httpsResponse.body).toEqual(new MissignParamnsError('passwordConfirmation'))
    })
})