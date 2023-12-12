import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import Item from './Item'

const ItemDetail = ({nombre, precio}) => {
    return (
        <div>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <Image
                        src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/torre-gaming-3036108.jpg?tf=3840x'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text>
                            Agregue al carrito para armar su equipo
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail