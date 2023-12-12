import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, Circle, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Link to={'/'}>
                    <Box ml={8} mt={2} mb={2} >
                        <Image
                            boxSize='55px'
                            src="./src/assets/images/pc.png" 
                        />
                    </Box>
                </Link>
                <Spacer />
                <Box mt={8} >
                    <Menu>
                        <MenuButton>
                            <Text>
                                Categorias
                            </Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem><NavLink to='categoria/mother'>Mother</NavLink></MenuItem>
                            <MenuItem><NavLink to='categoria/procesadores'>Procesadores</NavLink></MenuItem>
                            <MenuItem><NavLink to='categoria/memorias'>Memorias</NavLink></MenuItem>
                            <MenuItem><NavLink to='categoria/video'>Video</NavLink></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Circle size='45px' bg='black' color='white' mr={8} mt={2}>
                    <CartWidget />
                </Circle>
            </Flex>


        </div>
    )
}

export default NavBar