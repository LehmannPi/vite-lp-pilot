import { ChangeEvent, FormEvent, useState } from 'react';
import './index.scss';

interface ContactFormProps {
  submit: (values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

export const ContactForm = ({ submit }: ContactFormProps) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(values);
  };
  return (
    <form className="contact-form">
      <div className="contact-form-field-group">
        <label htmlFor="name">
          Name: <span>*</span>
        </label>
        <input onChange={handleChange} type="text" id="name" required />
      </div>

      <div className="contact-form-field-group">
        <label htmlFor="email">
          Email: <span>*</span>
        </label>
        <input onChange={handleChange} type="email" id="email" required />
      </div>

      <div className="contact-form-field-group">
        <label htmlFor="phone">
          Phone: <span>*</span>
        </label>
        <input onChange={handleChange} type="tel" id="phone" required />
      </div>

      <div className="contact-form-field-group">
        <label htmlFor="message">
          Message: <span>*</span>
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          id="message"
          cols={30}
          rows={10}
          required
        />
      </div>
      <div className="button-div">
        <button
          className="contact-button"
          aria-label="form-submit"
          type="button"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </form>
  );
};
