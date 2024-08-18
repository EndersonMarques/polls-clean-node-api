import { MissignParamnsError } from '../errors/missing-params-erro'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
    handle (httpRequest: HttpRequest): HttpResponse {
        if(!httpRequest.body.name) {
            return {
                statusCode: 400,
                body: new MissignParamnsError('name')
            }
        }

        if(!httpRequest.body.email) {
            return {
                statusCode: 400,
                body: new MissignParamnsError('email')
            }
        }
        return {
            statusCode: 400,
            body: new MissignParamnsError('email')
        }
    }
}