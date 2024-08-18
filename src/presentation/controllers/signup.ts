import { MissignParamnsError } from '../errors/missing-params-erro'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/helpers'
export class SignUpController {
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