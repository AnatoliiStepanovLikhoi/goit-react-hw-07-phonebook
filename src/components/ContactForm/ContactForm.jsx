// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { capitalizeFirstLetters } from '../Utils/capitalizeFirstLetters';

import { Form, Label, Input, AddContactButton } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // console.log(contacts);

  const dispatch = useDispatch();

  const checkTheSameName = inputName => {
    if (!contacts) return;

    const normaliziedInputName = inputName.toLowerCase().trim();
    // console.log(normaliziedInputName);

    return contacts.find(
      ({ name }) => name.toLowerCase() === normaliziedInputName
    );
  };

  const onSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.target);

    const formObject = Object.fromEntries(data.entries());

    const { name: inputName, number: inputNumber } = formObject;

    const capitalName = capitalizeFirstLetters(inputName);

    if (checkTheSameName(inputName)) {
      alert(`Sorry, ${capitalName} has already added!`);
      return;
    }

    dispatch(
      addContact({ name: capitalName, number: inputNumber, id: nanoid() })
    );

    // setName(inputName);
    // setNumber(inputNumber);

    event.currentTarget.reset();
  };

  // const onInputChange = event => {
  //   const { name: nameItem, number: numberItem } = event.target;
  // };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="FirstName LastName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я-яЁёІіЇїЄє]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // autoFocus
          // onChange={onInputChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={onInputChange}
        />
      </Label>
      <AddContactButton type="submit">Add contacts</AddContactButton>
    </Form>
  );
};
