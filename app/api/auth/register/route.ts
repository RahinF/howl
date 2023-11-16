import registerFormSchema from '@/app/constants/form/register';
import { client } from '@/sanity/lib/client';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request: Request, response: Response) {
  const { username, email, password, confirmPassword } = await request.json();

  // validate email, password, username
  const formValidation = registerFormSchema.safeParse({
    username,
    email,
    password,
    confirmPassword,
  });
  if (!formValidation.success) {
    const error = formValidation.error.issues[0].message;

    return NextResponse.json(
      { message: error, success: false },
      { status: 400 },
    );
  }

  // check if user exists in database
  const userFromDatabase = await client.fetch(
    `*[_type == "author" && email == "${email}"][0]{
          _id,
          username,
          email,
          password
        }`,
  );

  if (userFromDatabase) {
    return NextResponse.json(
      { message: 'User already exists.', success: false },
      { status: 409 },
    );
  }

  const hashedPassword = await hash(password, 10);

  // add user to database
  const doc = {
    _type: 'author',
    username,
    email,
    password: hashedPassword,
  };

  await client.create(doc, { token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN });

  return NextResponse.json(
    { message: 'User registration success', success: true },
    { status: 201 },
  );
}
