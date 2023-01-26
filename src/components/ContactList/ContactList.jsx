// import { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

import { ContactsList, ContactsMessage } from './ContactList.styled';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

export function ContactList() {
  // const { contacts, onContactDelete } = props;

  //   console.log(onContactDelete);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);

  const selectedContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ContactsList>
      {selectedContacts.length ? (
        (selectedContacts ?? contacts).map(contact => (
          <ContactListItem
            key={contact.id}
            contactInfo={contact}
            // onContactDelete={onContactDelete}
          />
        ))
      ) : (
        <ContactsMessage>We found nothing here:(</ContactsMessage>
      )}
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
