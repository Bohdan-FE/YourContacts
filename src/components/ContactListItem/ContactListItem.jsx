import { useDispatch } from 'react-redux';
import { Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/thunk';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const contactName = contact.name
    .toLowerCase()
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');

  return (
    <Item>
      <p>
        {contactName}:<span>{contact.number}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        Delete
      </button>
    </Item>
  );
};

ContactListItem.protoTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
