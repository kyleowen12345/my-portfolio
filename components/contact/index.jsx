import React from 'react'
import { Container,Text, useDisclosure} from '@chakra-ui/react'
const Contact = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Container height={800} id='contact'  maxWidth={"100%"}  bgColor={"orange"}>
            Contact
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error maiores, impedit adipisci ex consequuntur laboriosam dolorem quos quibusdam ullam quis earum neque est omnis placeat minus inventore aliquid temporibus cupiditate.</Text>
        </Container>
    )
}

export default Contact