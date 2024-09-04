import { MissignParamnsError } from '../errors/missing-params-erro'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/helpers'
import { Controller } from '../protocols/Controller'
import { EmailValidtor } from '../protocols/email-validtor'
import { InvalidParamError } from '../errors/invalid-param-erro'

export class SignUpController implements Controller {
    private readonly emailValidator: EmailValidtor;

    constructor (emailValidator: EmailValidtor) {
        this.emailValidator = emailValidator;
    }

    handle (httpRequest: HttpRequest): HttpResponse {
        const requiredFildes = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFildes) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissignParamnsError(field))
            }
        }
        const isValid = this.emailValidator.isValid(httpRequest.body.email)
        if(!isValid) {
            return badRequest(new InvalidParamError('email'))
        }
    }
}