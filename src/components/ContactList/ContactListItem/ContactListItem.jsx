import { PropTypes } from 'prop-types';
import { capitalizeFirstLetters } from '../../Utils/capitalizeFirstLetters';

import {
  Icon,
  ListItem,
  ContactText,
  RemoveContactButton,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from 'redux/selectors';
import { deleteContactAsyncThunk } from 'redux/contactsOperations';

export function ContactListItem(props) {
  const state = useSelector(getStatus);

  const dispatch = useDispatch();

  const {
    contactInfo: { name, phone, id },
    // onContactDelete,
  } = props;

  const handleDelete = () => dispatch(deleteContactAsyncThunk(id));

  const capitalName = capitalizeFirstLetters(name);

  return (
    <ListItem>
      <Icon />
      <ContactText>
        {capitalName}: {phone}
      </ContactText>
      <RemoveContactButton type="button" onClick={handleDelete}>
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
