import { SignUpController } from './signup'
import { MissignParamnsError } from '../errors/missing-params-erro'
import { InvalidParamError } from '../errors/invalid-param-erro'
import { EmailValidtor } from '../protocols/email-validtor'

interface SutTypes {
    sut: SignUpController
    emailValidtorStub : EmailValidtor
}

const makeSut = (): SutTypes => {
    class EmailValidatorStub implements EmailValidtor {
        isValid (email: string): boolean {
            return true
        }
    }
    const emailValidtorStub = new EmailValidatorStub()
    const sut = new SignUpController(emailValidtorStub)
    return {
        sut, 
        emailValidtorStub
    }
}

describe('SignUp Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const { sut } = makeSut()
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
        const { sut } = makeSut()
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
        const { sut } = makeSut()
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
        const { sut } = makeSut()
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

    test('Should return 400 if an invalid email is provided', () => {
        const { sut, emailValidtorStub } = makeSut()
        jest.spyOn(emailValidtorStub, 'isValid').mockReturnValueOnce(false)
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'invalid_email',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpsResponse = sut.handle(httpRequest)
        expect(httpsResponse.statusCode).toBe(400)
        expect(httpsResponse.body).toEqual(new InvalidParamError('email'))
    })
})
