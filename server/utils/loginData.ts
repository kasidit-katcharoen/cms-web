export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'john doe',
    email: 'john@gmail.com',
    password: '123456'
  },
    {
    id: 2,
    name: 'charee',
    email: 'charee@gmail.com',
    password: '123456'
  },
      {
    id: 3,
    name: 'kasidit',
    email: 'kasidit.kat@gmail.com',
    password: '123456'
  },
        {
    id: 4,
    name: 'test',
    email: 'test@gmail.com',
    password: '123456'
  },
];
