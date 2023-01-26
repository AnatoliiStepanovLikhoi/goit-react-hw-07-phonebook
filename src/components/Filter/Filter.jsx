// import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

import { Label, Input } from '../ContactForm/ContactForm.styled';

export function Filter() {
  const dispatch = useDispatch();

  const onFilterInput = event => {
    const filterInputValue = event.target.value.toLocaleLowerCase();

    // console.log(filterInputValue);

    dispatch(filterContact(filterInputValue));
  };
  return (
    <Label>
      Filter contacts by name
      <Input
        onInput={onFilterInput}
        name="search"
        placeholder="Search"
        // value={value}
      />
    </Label>
  );
}

// Filter.protoTypes = {
//   onFilterInput: PropTypes.func.isRequired,
// };
