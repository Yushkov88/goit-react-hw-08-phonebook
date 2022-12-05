import { useState, useEffect, useCallback } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsApi';
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import { AddIcCall } from '@mui/icons-material';
import { useSnackbar } from 'notistack';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContactApi, { isLoading, isSuccess, isError, error }] =
    useAddContactMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = e => {
    e.preventDefault();

    data.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : addContactApi({
          name: name,
          number: number,
        });

    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const manageError = useCallback(
    status => {
      let message;

      switch (status) {
        case status === 404:
          message = "Sorry, we can't find this page";
          break;
        case status === 400:
          message = 'Internet is disconnected';
          break;
        default:
          message = 'Something went wrong, please try again later';
      }

      enqueueSnackbar(message, {
        variant: 'error',
      });
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Contact added successfully', {
        variant: 'success',
      });
    }

    if (isError) {
      manageError(error?.status);
    }
  }, [isSuccess, isError, enqueueSnackbar, error?.status, manageError]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      // autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '20rem',
        border: '1px solid #005BBB',
        padding: '0 1rem',
      }}
    >
      <TextField
        label="Name"
        size="small"
        margin="normal"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
      <TextField
        label="Number"
        size="small"
        margin="normal"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        required
      />
      <Button
        variant="contained"
        type="submit"
        margin="normal"
        sx={{ width: '15rem', m: '1rem 0' }}
        endIcon={
          isLoading ? (
            <CircularProgress size={16} thickness={6} color="inherit" />
          ) : (
            <AddIcCall />
          )
        }
      >
        Add contact
      </Button>
    </Box>
  );
}
