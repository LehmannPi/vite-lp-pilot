import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '.';

describe('Contact form', () => {
  it('should have a username and a password field, also submit button', () => {
    render(<ContactForm submit={() => {}} />);

    const nameField = screen.queryByLabelText(/name/i);
    const emailField = screen.queryByLabelText(/email/i);
    const phoneField = screen.queryByLabelText(/phone/i);
    const messageField = screen.queryByLabelText(/message/i);
    const submitButton = screen.queryByRole('button', { name: /form-submit/i });

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(phoneField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should allow user to submit their data', async () => {
    const submit = jest.fn();
    render(<ContactForm submit={submit} />);

    const nameField = screen.queryByLabelText(/name/i);
    const emailField = screen.queryByLabelText(/email/i);
    const phoneField = screen.queryByLabelText(/phone/i);
    const messageField = screen.queryByLabelText(/message/i);
    const submitButton = screen.queryByRole('button', { name: /form-submit/i });

    if (nameField && emailField && phoneField && messageField && submitButton) {
      await userEvent.type(nameField, 'name');
      await userEvent.type(emailField, 'email@email.com');
      await userEvent.type(phoneField, '+55 33 9999-9999');
      await userEvent.type(messageField, 'this is a message');
      await userEvent.click(submitButton);
    }
    expect(submit).toHaveBeenCalledWith({
      name: 'name',
      email: 'email@email.com',
      phone: '+55 33 9999-9999',
      message: 'this is a message',
    });
  });
});
