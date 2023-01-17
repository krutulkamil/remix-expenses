export interface IUser {
    email: string;
    password: string;
}

export interface IUserValidationError {
    email?: string;
    password?: string;
}