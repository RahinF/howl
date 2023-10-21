import LoginForm from '@/components/LoginForm';
import { CardProvider } from '@/context/CardContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('LoginForm', () => {
  it('should display the heading', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const heading = screen.getByRole('heading', {
      level: 3,
      name: /lorem, ipsum dolor\./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should display the paragraph text', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const paragraph = screen.getByText(/lorem ipsum dolor sit amet\./i);
    expect(paragraph).toBeInTheDocument();
  });

  it('should display the email label', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const label = screen.getByText(/email/i);
    expect(label).toBeInTheDocument();
  });

  it('should display the password label', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const label = screen.getByText('Password');
    expect(label).toBeInTheDocument();
  });

  it('should display the email input box', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const input = screen.getByRole('textbox', {
      name: /email/i,
    });
    expect(input).toBeInTheDocument();
  });

  it('should display the password input box', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();
  });

  it('should display the submit button', () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const button = screen.getByRole('button', {
      name: /login/i,
    });
    expect(button).toBeInTheDocument();
  });

  it('should display 2 error messages when form is submitted empty', async () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );
    const button = screen.getByRole('button', {
      name: /login/i,
    });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const errors = screen.getAllByRole('alert');

    expect(errors).toHaveLength(2);
  });

  it('should submit form if correct', async () => {
    render(
      <CardProvider>
        <LoginForm />
      </CardProvider>,
    );

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    const passwordInput = screen.getByLabelText('Password');

    await userEvent.type(emailInput, 'chicken.wing@henhouse.com');
    await userEvent.type(passwordInput, '8charlimit');

    const button = screen.getByRole('button', {
      name: /login/i,
    });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const errors = screen.queryAllByRole('alert');

    expect(errors).toHaveLength(0);
  });
});
