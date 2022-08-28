import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { VertFlexSection, OneLine } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, getFilter } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from 'redux/contactsAPI';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { data: contacts, isFetching } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  // console.log(contacts, filter);

  const filterContacts = () =>
    contacts.filter(c => c.name.toLowerCase().includes(filter));

  const handleFilterChange = e => {
    dispatch(filterSet(e.target.value.toLowerCase()));
  };

  const [removeContact, { isLoading: isUpdating }] = useRemoveContactMutation();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        backgroundColor: 'var(--back-color-2)',
      }}
    >
      <VertFlexSection>
        <OneLine>
          <h2>Phonebook</h2>
        </OneLine>
        <ContactForm />
        <h3>Contacts</h3>
        <Filter onChange={handleFilterChange} />
        {contacts?.length > 0 && (
          <ContactList contacts={filterContacts()} onDelete={removeContact} />
        )}
      </VertFlexSection>
      {(isFetching || isUpdating) && <Loader />}
    </div>
  );
};
