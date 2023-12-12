import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Flex } from '@chakra-ui/react';

const CartWidget = () => {
    return (
        <>
            <div className='logoCarrito'>
                <h2 className='numeroCarrito'>5</h2>
                <Flex align='center' justify='center'>
                    <BsFillCartFill />
                </Flex>
            </div>
        </>
    )
}

export default CartWidget