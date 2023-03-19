import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ModalComp from './ModalComp'

const TableComp = (props) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [userId, setUserId] = useState(null)
    const [allUsers ,setAllUsers] = useState(props.data)

  return (
    <TableContainer w='100%' border='1px solid lightgray' p={2} bg='whiteAlpha.800'>
        <Table w='100%' m='auto' variant='simple' size='lg' cellSpacing={2} border='1px solid gray'>
            <TableCaption mt='20px'>Users Table</TableCaption>
            <Thead display='table-header-group' >
                <Tr fontSize='24px'>
                    <Th >Name</Th>
                    <Th >Email</Th>
                    <Th >Groups</Th>
                </Tr>
            </Thead>
            <Tbody >
                {
                    allUsers.map((el) => (
                        <Tr onClick={() => {
                            setUserId(el.id)
                            onOpen()
                        }} _hover={{bg:'lavender', cursor:'pointer'}} key={el.id} fontSize='20px' textAlign='center'>
                            <Td>{el.name}</Td>
                            <Td>{el.email}</Td>
                            <Td><Button colorScheme={el.groups === 'Student' ? 'blue' : el.groups === 'Instructor' ? "orange" : 'red'} variant='solid'>{el.groups}</Button></Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
            <ModalComp isOpen={isOpen} onClose={onClose} allUsers={allUsers} setAllUsers={setAllUsers} userId={userId} />
    </TableContainer>
  )
}

export default TableComp
