export const register = async ({
  username,
  email,
  password,
  confirmPassword,
}: RegisterFormValues) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
      confirmPassword,
    }),
  });
};
