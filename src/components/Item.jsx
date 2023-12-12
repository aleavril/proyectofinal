import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio}) => {
    return (
        <div>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <Image
                        src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/torre-gaming-3036108.jpg?tf=3840x'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={'/cart'}>
                            <Button variant='solid' colorScheme='blue'>
                                Agregar al carrito
                            </Button>
                        </Link>
                        <Link to={`/item/${id}`}>
                            <Button variant='ghost' colorScheme='blue'>
                                Descripcion
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item