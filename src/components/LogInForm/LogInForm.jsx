import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from 'redux/authThunk';
import { Form } from '../FormStyledComponents/FormStyledComponents.styled';
import { Button, FormLabel, TextField } from '@mui/material';

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
      <FormLabel>{register ? 'Register new user' : 'Log in'}</FormLabel>
      <Form onSubmit={handleSubmit}>
        {register && (
          <TextField
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        )}
        <TextField
          type="email"
          name="email"
          label="email"
          variant="outlined"
          //   pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          title="Enter the right email address"
          required
          value={email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="outlined"
          pattern="^.{8,}$"
          title="Minimum length 8 characters"
          required
          value={password}
          onChange={handleChange}
        />

        <Button
          variant={register ? 'contained' : 'outlined'}
          type="submit"
          disabled={email === '' || password === ''}
        >
          {register ? 'Register new user' : 'Log in'}
        </Button>
      </Form>
    </>
  );
};

export default LogInForm;
