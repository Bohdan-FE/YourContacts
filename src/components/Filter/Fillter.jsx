import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

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
        value={filter}
        onChange={handleChange}
        label="Find contacts by name"
      ></TextField>
    </>
  );
};
