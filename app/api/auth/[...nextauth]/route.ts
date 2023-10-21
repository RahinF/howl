// import { compare } from 'bcryptjs';
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
      async authorize(credentials, req) {
        return {
          id: 'userFromDatabase.id',
          email: 'userFromDatabase.email',
        };
        // console.log(credentials);
        // // validate email and password with zod
        // // search user from database
        // const userFromDatabase = {
        //   id: '',
        //   email: '',
        //   hashedPassword: '',
        // };

        // // if exists compare hashedPassword

        // const passwordCorrect = await compare(
        //   credentials?.password || '',
        //   userFromDatabase.hashedPassword,
        // );

        // // if password is correct return user
        // if (passwordCorrect) {
        //   return {
        //     id: userFromDatabase.id,
        //     email: userFromDatabase.email,
        //   };
        // }

        // return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
