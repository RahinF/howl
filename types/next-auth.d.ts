import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & { id: string };
  }
  interface User extends DefaultUser {
    username: string;
    _id: string;
    avatar: string | null;
  }
}
