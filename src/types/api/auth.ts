export interface IRegisterForm {
    email: string;
    username?: string;
    password: string;
    name: string;
}


export interface ILoginForm {
    username?: string;
    email?: string;
    password: string;
}