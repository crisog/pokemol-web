import React from 'react';
import { Box } from '@chakra-ui/react';
import NewBoostRequestForm from '../../components/Settings/NewBoostRequestForm';

const NewBoost = () => {
  return (
    <Box w='60%'>
      <NewBoostRequestForm />
    </Box>
  );
};

export default NewBoost;
