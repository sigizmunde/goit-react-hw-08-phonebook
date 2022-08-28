import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={phone}
          onClickDelete={onDelete}
        />
      ))}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
