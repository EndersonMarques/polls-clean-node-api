export class MissignParamnsError extends Error {
    constructor (paramName: string) {
        super(`Missing param: ${paramName}`)
        this.name = 'MissignParamnsError'
    }
}