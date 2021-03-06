import React, { useEffect, useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import { useDaoMetadata } from '../../contexts/PokemolContext';
import DaoMetaForm from '../../components/Forms/DaoMetaForm';

const DaoMetadata = () => {
  const [daoMetadata, updateDaoMetadata] = useDaoMetadata();
  const [localMetadata, setLocalMetadata] = useState();
  const history = useHistory();

  useEffect(() => {
    if (daoMetadata && !localMetadata) {
      setLocalMetadata({
        address: daoMetadata.address,
        name: daoMetadata.name,
        description: daoMetadata.description,
        purpose: daoMetadata.purpose,
        links: daoMetadata.links,
        avatarImg: daoMetadata.avatarImg,
        version: daoMetadata.version,
        tags: daoMetadata.tags,
      });
    }
  }, [daoMetadata, localMetadata]);

  const handleUpdate = (newDaoData) => {
    updateDaoMetadata({ ...daoMetadata, ...newDaoData });
    history.push(`/dao/${daoMetadata.address}/settings`);
  };

  return (
    <Box w='40%'>
      <Flex ml={6} justify='space-between' align='center' w='100%'>
        <Flex
          as={RouterLink}
          to={`/dao/${daoMetadata?.address}/settings`}
          align='center'
        >
          <Icon as={BiArrowBack} color='secondary.500' mr={2} />
          Back
        </Flex>
      </Flex>
      <DaoMetaForm metadata={localMetadata} handleUpdate={handleUpdate} />
    </Box>
  );
};

export default DaoMetadata;
