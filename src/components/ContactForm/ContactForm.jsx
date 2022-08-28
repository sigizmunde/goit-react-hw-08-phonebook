import React, { useEffect, useState } from 'react';
import { Form, SubmitButton } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsAPI';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameList, setNameList] = useState('');

  const { data: contacts, isFetching } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  useEffect(() => {
    setNameList(contacts ? contacts.map(item => item.name) : []);
  }, [contacts]);

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const successCondition = !nameList.filter(
      item => item.toLowerCase() === name.toLowerCase()
    ).length;

    if (successCondition) {
      addContact({ id: nanoid(), name, phone: number });
      clearForm();
      // form clears only on success
    } else {
      alert(name + ' is already in contacts');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <label>
        {'Phone '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <SubmitButton type="submit" disabled={isFetching}>
        Add contact
      </SubmitButton>
    </Form>
  );
};

export default ContactForm;
