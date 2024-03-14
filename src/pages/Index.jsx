import React from "react";
import { Box, Flex, Heading, Text, Button, Stat, StatLabel, StatNumber, Table, Thead, Tbody, Tr, Th, Td, Avatar } from "@chakra-ui/react";
import { FaUsers, FaChartLine, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex bg="gray.100" p={4} align="center">
        <Heading as="h1" size="xl" mr={4}>
          Panel de Administración
        </Heading>
        <Button leftIcon={<FaCog />} colorScheme="teal" size="lg">
          Configuración
        </Button>
      </Flex>

      <Flex m={8} justify="space-between">
        <Stat>
          <StatLabel>Total Usuarios</StatLabel>
          <StatNumber>1,200</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Ingresos Mensuales</StatLabel>
          <StatNumber>$42,500</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Tasa de Conversión</StatLabel>
          <StatNumber>8.5%</StatNumber>
        </Stat>
      </Flex>

      <Box m={8}>
        <Heading mb={4}>Últimos Usuarios Registrados</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Usuario</Th>
              <Th>Fecha Registro</Th>
              <Th>Rol</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Flex align="center">
                  <Avatar name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQyMjczMnww&ixlib=rb-4.0.3&q=80&w=1080" mr={2} />
                  <Text>John Doe</Text>
                </Flex>
              </Td>
              <Td>2023-04-24</Td>
              <Td>Usuario</Td>
            </Tr>
            <Tr>
              <Td>
                <Flex align="center">
                  <Avatar name="Jane Smith" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQyMjczMnww&ixlib=rb-4.0.3&q=80&w=1080" mr={2} />
                  <Text>Jane Smith</Text>
                </Flex>
              </Td>
              <Td>2023-04-23</Td>
              <Td>Admin</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
