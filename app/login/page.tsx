'use client';

import LoginForm from '@/components/LoginForm';
import { CardProvider } from '@/context/CardContext';

export default function Login() {
  const login = () => {};
  
  return (
    <main className="max-w-screen-xl min-h-screen m-auto">
      <CardProvider>
        <LoginForm login={login} />
      </CardProvider>
    </main>
  );
}
