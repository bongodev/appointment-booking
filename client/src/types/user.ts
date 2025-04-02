export type UserRole = {
  id: string;
  name: string;
  description: string;
  permissions: string[];
};

export type UserProfile = {
  id: string;
  image?: string;
  address?: {
    street?: string;
    city?: string;
    zipCode?: string;
    country?: string;
  };
  dateOfBirth?: Date | null;
};

export type User = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  mobile: string;
  role: UserRole | null;
};
