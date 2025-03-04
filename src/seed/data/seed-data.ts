interface SeedData {
  users: SeedUser[];
}

interface SeedUser {
  email: string;
  fullName: string;
  password: string;
  roles: string[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'test1@gmail.com',
      fullName: 'Antonio Molina',
      password: 'Abcd1234*',
      roles: ['admin', 'user'],
    },
    {
      email: 'test2@gmail.com',
      fullName: 'Keissy De La Cruz',
      password: 'Abcd1234*',
      roles: ['user'],
    },
  ],
};
