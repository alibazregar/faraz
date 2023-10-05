export class InternalServerError extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
        this.name = 'internalServerError'; 
    }
}
export type InternalServerErrorType = InternalServerError;
