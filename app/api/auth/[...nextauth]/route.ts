import { loginFormSchema } from '@/app/constants';
import { client } from '@/sanity/lib/client';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, request) {
        const formValidation = loginFormSchema.safeParse(credentials);
        if (!formValidation.success) {
          const error = formValidation.error.issues[0].message;
          throw new Error(error);
        }

        const email = credentials?.email;
        const userFromDatabase = await client.fetch(
          `*[_type == "author" && email == "${email}"][0]{
              _id,
              username,
              email,
              password
            }`,
        );

        if (!userFromDatabase) {
          throw new Error('You have entered an invalid email or password.');
        }

        const passwordCorrect = await compare(
          credentials?.password || '',
          userFromDatabase.password,
        );

        if (!passwordCorrect) {
          throw new Error('You have entered an invalid email or password.');
        }

        const { password, ...user } = userFromDatabase;

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
