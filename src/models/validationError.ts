export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.name = 'ValidationError'; 
    }
}
export type ValidationErrorType = ValidationError;

