'use client';

import RegisterForm from '@/components/RegisterForm';
import { CardProvider } from '@/context/CardContext';

export default function Register() {
  const register = () => {};

  return (
    <main className="max-w-screen-xl min-h-screen m-auto">
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>
    </main>
  );
}
