import { ListItem } from './ContactItem.styled';
import PropTypes from 'prop-types';

function ContactItem({ id, name, number, onClickDelete }) {
  return (
    <ListItem>
      <span>{name}:</span>
      <span>{number}</span>
      <span>
        <button type="button" onClick={() => onClickDelete(id)}>
          delete
        </button>
      </span>
    </ListItem>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
