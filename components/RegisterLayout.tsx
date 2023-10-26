'use client';

import { register } from '@/api/auth';
import RegisterForm from '@/components/RegisterForm';

export default function RegisterLayout() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto p-4 2xl:p-0">
      <RegisterForm register={register} />
    </main>
  );
}
