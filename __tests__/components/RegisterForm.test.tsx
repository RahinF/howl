import RegisterForm from '@/components/RegisterForm';
import { CardProvider } from '@/context/CardContext';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('RegisterForm', () => {
  const register = jest.fn();

  it('renders heading', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const heading = screen.getByRole('heading', {
      level: 3,
      name: /lorem, ipsum dolor\./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph text', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const paragraph = screen.getByText(/lorem ipsum dolor sit amet\./i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders username label', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const label = screen.getByText(/username/i);
    expect(label).toBeInTheDocument();
  });

  it('renders email label', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const label = screen.getByText(/email/i);
    expect(label).toBeInTheDocument();
  });

  it('renders password label', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const label = screen.getByText('Password');
    expect(label).toBeInTheDocument();
  });

  it('renders confirm password label', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const label = screen.getByText('Confirm Password');
    expect(label).toBeInTheDocument();
  });

  it('renders username input box', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const input = screen.getByRole('textbox', {
      name: /username/i,
    });
    expect(input).toBeInTheDocument();
  });

  it('renders email input box', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const input = screen.getByRole('textbox', {
      name: /email/i,
    });
    expect(input).toBeInTheDocument();
  });

  it('renders password input box', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();
  });

  it('renders confirm password input box', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const input = screen.getByLabelText('Confirm Password');
    expect(input).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', {
      name: /register/i,
    });
    expect(button).toBeInTheDocument();
  });

  it('should display 4 error messages when form is submitted empty', async () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', {
      name: /register/i,
    });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const errors = screen.getAllByRole('alert');

    expect(errors).toHaveLength(4);

    expect(register).not.toBeCalled();
  });

  it('should display no error messages when form is submitted correctly', async () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const usernameInput = screen.getByRole('textbox', {
      name: /username/i,
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');

    await userEvent.type(usernameInput, 'chicken wing');
    await userEvent.type(emailInput, 'chicken.wing@henhouse.com');
    await userEvent.type(passwordInput, '8charlimit');
    await userEvent.type(confirmPasswordInput, '8charlimit');

    const button = screen.getByRole('button', {
      name: /register/i,
    });

    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const errors = screen.queryAllByRole('alert');

    expect(errors).toHaveLength(0);
  });

  it('should display password mismatch error when password do not match', async () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const usernameInput = screen.getByRole('textbox', {
      name: /username/i,
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');

    await userEvent.type(usernameInput, 'chicken wing');
    await userEvent.type(emailInput, 'chicken.wing@henhouse.com');
    await userEvent.type(passwordInput, '8charlimit');
    await userEvent.type(confirmPasswordInput, '8charlimit1');

    const button = screen.getByRole('button', {
      name: /register/i,
    });

    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const passwordMismatchError = screen.queryByRole('alert');

    expect(passwordMismatchError).toBeInTheDocument();

    const errorText = within(passwordMismatchError as HTMLElement).getByText(
      /password do not match/i,
    );
    expect(errorText).toBeInTheDocument();
  });

  it('should display password min length error when password is too short', async () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const usernameInput = screen.getByRole('textbox', {
      name: /username/i,
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');

    await userEvent.type(usernameInput, 'chicken wing');
    await userEvent.type(emailInput, 'chicken.wing@henhouse.com');
    await userEvent.type(passwordInput, 'test');
    await userEvent.type(confirmPasswordInput, 'test');

    const button = screen.getByRole('button', {
      name: /register/i,
    });

    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const passwordLengthError = screen.getByText(
      /password must have than 8 characters./i,
    );

    const confirmPasswordError = screen.getByText(
      /password entered should match./i,
    );

    expect(passwordLengthError).toBeInTheDocument();
    expect(confirmPasswordError).toBeInTheDocument();
  });

  it('should display invalid email error when email is not in the correct format', async () => {
    render(
      <CardProvider>
        <RegisterForm register={register} />
      </CardProvider>,
    );
    const usernameInput = screen.getByRole('textbox', {
      name: /username/i,
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');

    await userEvent.type(usernameInput, 'chicken wing');
    await userEvent.type(emailInput, 'test@test');
    await userEvent.type(passwordInput, 'test1234');
    await userEvent.type(confirmPasswordInput, 'test1234');

    const button = screen.getByRole('button', {
      name: /register/i,
    });

    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    const invalidEmailError = screen.queryByRole('alert');

    const errorText = within(invalidEmailError as HTMLElement).getByText(
      /please provide valid email address./i,
    );
    expect(errorText).toBeInTheDocument();
  });
});
