export type User ={
    _id? : string;
    name: string;
    email: string;
    mobile: string;
    password?: string;
    role: 'user' | 'executive' | 'support' | 'admin';

}