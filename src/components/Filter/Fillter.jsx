import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { TextField } from '@mui/material';
import { filterSelector } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <>
      <TextField
        sx={{
          width: '100%',
          maxWidth: '350px',
        }}
        color="input"
        value={filter}
        onChange={handleChange}
        label="Find contacts by name"
      ></TextField>
    </>
  );
};
