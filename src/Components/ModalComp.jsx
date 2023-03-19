import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    HStack,
    Input,
    IconButton,
    Text,
    Badge,
  } from '@chakra-ui/react'
import { CloseIcon, EditIcon, PlusSquareIcon } from '@chakra-ui/icons'

const ModalComp = ({isOpen, onClose, allUsers, userId, setAllUsers}) => {
    const [name, setName] = useState("#")
    const [user, setUser] = useState({})

    useEffect(() => {
        let person = allUsers.filter((el) => el.id === userId)
        setName(person[0]?.name)
        setUser(person[0])
    },[userId])

    const handleSubmit = () => {
        let updatedUsers = allUsers.map((el) => {
            if(el.id === userId && name !== "#"){
                el.name = name
                return el
            }
            return el
        })
        setAllUsers(updatedUsers)
        onClose()
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <HStack w='100%' justifyContent='space-between'>
                    <label>Name:</label>
                    <Input type='text' onChange={(e) => setName(e.target.value)} placeholder={user?.name} />
                    <IconButton icon={<EditIcon />} />
                </HStack>
                <HStack mt='15px'>
                    <label >Email:</label>
                    <Text>{user?.email}</Text>
                </HStack>
                <HStack mt='15px'>
                    <label >Groups:</label>
                    <Badge cursor='pointer' colorScheme='blue' >Student {user?.groups == 'Student' ? <CloseIcon/> : <PlusSquareIcon />} </Badge>
                    <Badge cursor='pointer' colorScheme='orange' >Instructor {user?.groups == 'Instructor' ? <CloseIcon/> : <PlusSquareIcon />} </Badge>
                </HStack>
            </ModalBody>

            <ModalFooter justifyContent='space-between'>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button colorScheme='whatsapp' mr={3} onClick={handleSubmit}>
                    Update
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default ModalComp
