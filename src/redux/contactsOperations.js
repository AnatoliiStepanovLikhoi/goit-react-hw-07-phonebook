import {
  contactsErrorAction,
  contactsLoadingAction,
  contactsSuccessAction,
} from 'redux/contactsSlice';
import axios from 'axios';

export const contactsAsyncThunk = async dispatch => {
  dispatch(contactsLoadingAction());

  try {
    const { data } = await axios.get(
      'https://63d28d3606556a0fdd3f25f8.mockapi.io/contacts'
    );
    dispatch(contactsSuccessAction(data));
  } catch {
    dispatch(contactsErrorAction());
  }
};
