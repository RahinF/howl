import LoginForm from '@/components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <main className="max-w-screen-xl min-h-screen m-auto p-4 2xl:p-0">
      <LoginForm />
    </main>
  );
}
