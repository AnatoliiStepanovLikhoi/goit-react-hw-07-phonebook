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
  const state = useSelector(getStatus);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(contactsAsyncThunk());
  }, [dispatch]);

  // const { contacts, onContactDelete } = props;

  console.log(filter);

  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // console.log(state === 'loading');

  // const selectedContacts = (() => {
  //   if (!contacts) return;

  //   return contacts.filter(({ name }) =>
  //     // console.log(name.toLowerCase().includes(filter))
  //     name.toLowerCase().includes(filter)
  //   );
  // })();

  // console.log(contacts);

  return (
    <>
      <ContactsList>
        {state === 'idle' && (
          // || state === 'loading'
          <Loader />
        )}

        {/* {selectedContacts?.length ? (
          (selectedContacts ?? contacts).map(contact => (
            <ContactListItem
              key={contact.id}
              contactInfo={contact}
              // onContactDelete={onContactDelete}
            />
          ))
        ) : filter ? (
          <ContactsMessage>We found nothing here:(</ContactsMessage>
        ) : state === 'loading' ? (
          <Loader />
        ) : (
          <ContactsMessage>Empty phonebook</ContactsMessage>
        )} */}

        {contacts?.length ? (
          contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contactInfo={contact}
              // onContactDelete={onContactDelete}
            />
          ))
        ) : (
          <ContactsMessage>We found nothing here:(</ContactsMessage>
        )}

        {state === 'error' && (
          <ContactsMessage>We found nothing here:(</ContactsMessage>
        )}

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
    </>
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
