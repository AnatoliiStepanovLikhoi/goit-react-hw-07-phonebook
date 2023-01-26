import { PropTypes } from 'prop-types';
import { capitalizeFirstLetters } from '../../Utils/capitalizeFirstLetters';

import {
  Icon,
  ListItem,
  ContactText,
  RemoveContactButton,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

export function ContactListItem(props) {
  //   console.log(props.contactInfo.name);

  const dispatch = useDispatch();

  const {
    contactInfo: { name, phone, id },
    // onContactDelete,
  } = props;

  // const handleDelete = () => dispatch(deleteContact(id));

  const capitalName = capitalizeFirstLetters(name);

  return (
    <ListItem>
      <Icon />
      <ContactText>
        {capitalName}: {phone}
      </ContactText>
      <RemoveContactButton
        type="button"
        // onClick={handleDelete}
      >
        Remove
      </RemoveContactButton>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
