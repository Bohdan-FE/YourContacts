import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/thunk';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CallIcon from '@mui/icons-material/Call';
import { Box, ListItem, Button } from '@mui/material';
import { motion } from 'framer-motion';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const contactName = contact.name
    .toLowerCase()
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');

  return (
    <ListItem
      sx={{
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid rgb(0 0 0 / 27%)',
      }}
      component={motion.li}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Box sx={{ minWidth: '130px', overflow: 'hidden' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
          {contactName}
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
          {contact.number}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'nowrap', width: '128px' }}>
        <Button variant="outline" component="a" href={`tel:${contact.number}`}>
          <CallIcon />
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch(deleteContactThunk(contact.id))}
        >
          <DeleteForeverIcon />
        </Button>
      </Box>
    </ListItem>
  );
};

ContactListItem.protoTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
