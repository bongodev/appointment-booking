export type User = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  mobile: string;
  role: 'user' | 'executive' | 'admin' | 'support';
};
