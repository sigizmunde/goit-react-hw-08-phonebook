import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { OneLine } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, getFilter } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from 'redux/contactsAPI';
import Loader from 'components/Loader/Loader';
import { VertFlexSection } from 'components/Containers/Containers.styled';

export const Contacts = () => {
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
    <>
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
    </>
  );
};
