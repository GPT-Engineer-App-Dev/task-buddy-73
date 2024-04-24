import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Flex as="nav" bg="brand.800" p="4" color="white" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" p="2">Home</Link>
        <Link as={RouterLink} to="/todos" p="2">Todos</Link>
      </Box>
    </Flex>
  );
}

export default Navigation;