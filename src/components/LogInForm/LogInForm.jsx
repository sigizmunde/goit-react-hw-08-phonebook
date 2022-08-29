import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from 'redux/authThunk';
import {
  Form,
  FormCaption,
  SubmitButton,
} from '../FormStyledComponents/FormStyledComponents.styled';

const LogInForm = ({ register = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'email':
        setEmail(e.target.value);
        return;
      case 'password':
        setPassword(e.target.value);
        return;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // register
    if (register) {
      dispatch(registerUser({ name, email, password }));
      clearForm();
      return;
    }

    // log in
    if (!register) {
      dispatch(logInUser({ email, password }));
      clearForm();
    } else {
      alert('Something is wrong');
    }
  };

  return (
    <>
      <FormCaption>{register ? 'Register new user' : 'Log in'}</FormCaption>
      <Form onSubmit={handleSubmit}>
        {register && (
          <label>
            {'Name '}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
        )}
        <label>
          {'Email '}
          <input
            type="email"
            name="email"
            //   pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="Enter the right email address"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          {'Password '}
          <input
            type="password"
            name="password"
            pattern="^.{8,}$"
            title="Minimum length 8 characters"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <SubmitButton type="submit" disabled={false}>
          {register ? 'Register new user' : 'Log in'}
        </SubmitButton>
      </Form>
    </>
  );
};

export default LogInForm;
