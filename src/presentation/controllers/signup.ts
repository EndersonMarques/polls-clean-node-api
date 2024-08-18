import { MissignParamnsError } from '../errors/missing-params-erro'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/helpers'
import { Controller } from '../protocols/Controller'

export class SignUpController implements Controller {
    handle (httpRequest: HttpRequest): HttpResponse {
        const requiredFildes = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFildes) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissignParamnsError(field))
            }
        }
        return badRequest(new MissignParamnsError('name'))
    }
}