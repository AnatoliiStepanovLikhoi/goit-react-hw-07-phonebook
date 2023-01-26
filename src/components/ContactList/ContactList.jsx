// import { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

import { ContactsList, ContactsMessage } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getContacts, getFilter, getStatus } from 'redux/selectors';
import { contactsAsyncThunk } from 'redux/contactsOperations';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(contactsAsyncThunk);
  }, [dispatch]);

  // const { contacts, onContactDelete } = props;

  //   console.log(onContactDelete);

  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  console.log(status);

  // const selectedContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter)
  // );

  return (
    <ContactsList>
      {contacts?.map(contact => (
        <ContactListItem
          key={contact.id}
          contactInfo={contact}
          // onContactDelete={onContactDelete}
        />
      ))}
      {/* {selectedContacts.length ? (
        (selectedContacts ?? contacts).map(contact => (
          <ContactListItem
            key={contact.id}
            contactInfo={contact}
            // onContactDelete={onContactDelete}
          />
        ))
      ) : (
        <ContactsMessage>We found nothing here:(</ContactsMessage>
      )} */}
    </ContactsList>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onContactDelete: PropTypes.func.isRequired,
// };
