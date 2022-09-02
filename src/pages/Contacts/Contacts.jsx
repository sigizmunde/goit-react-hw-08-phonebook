import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { OneLine } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, getFilter } from 'redux/filterSlice';
import Loader from 'components/Loader/Loader';
import { VertFlexSection } from 'components/Containers/Containers.styled';
import { loadContacts, removeContact } from 'redux/contactsThunk';
import { getContacts, getContactsLoading } from 'redux/contactsSelectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isFetching = useSelector(getContactsLoading);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const filterContacts = () =>
    contacts.filter(c => c.name.toLowerCase().includes(filter));

  const handleFilterChange = e => {
    dispatch(filterSet(e.target.value.toLowerCase()));
  };

  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <VertFlexSection style={{ height: '75%' }}>
        <OneLine>
          <h2>Phonebook</h2>
        </OneLine>
        <ContactForm />
        <h3>Contacts</h3>
        <Filter onChange={handleFilterChange} />
        {contacts?.length > 0 && (
          <ContactList
            contacts={filterContacts()}
            onDelete={handleRemoveContact}
          />
        )}
      </VertFlexSection>
      {isFetching && <Loader />}
    </>
  );
};
