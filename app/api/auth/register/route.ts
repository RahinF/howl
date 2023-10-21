import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request: Request, response: Response) {
  try {
    const { username, email, password, confirmPassword } = await request.json();

    // validate email, password, username

    console.log({ email, password, username, confirmPassword });

    const hashedPassword = bcrypt.hash(password, 10);

    // check if user exists in database
    // add user to database
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: 'Success' });
}
