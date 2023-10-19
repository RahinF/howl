'use client';

import { login } from '@/api/auth';
import LoginForm from '@/components/LoginForm';
import { CardProvider } from '@/context/CardContext';

export default function Login() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto p-4 2xl:p-0">
      <CardProvider>
        <LoginForm login={login} />
      </CardProvider>
    </main>
  );
}
