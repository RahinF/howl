'use client';

import LoginForm from '@/components/LoginForm';
import { CardProvider } from '@/context/CardContext';

export default function Login() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto">
      <CardProvider>
        <LoginForm />
      </CardProvider>
    </main>
  );
}
