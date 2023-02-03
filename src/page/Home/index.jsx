import apiFetch from '../../axios/api';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import './style.css';

export function Home() {
  return (
    <>
      <h1 className="title"> Agenda de Contatos</h1>
      {apiFetch.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <TableContainer>
          <Table variant="striped" colorScheme="cyan" size="sm">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Telefone</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {apiFetch.map((client) => (
                <Tr className="client" key={client.id}>
                  <Td className="name-client">{client.name}</Td>
                  <input type="text"
                    className="input-table"
                    value={client.phone}
                    placeholder={client.phone} />
                  <Td>{client.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
