import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <Box className='flex items-center justify-between py-4 px-4 md:px-6'>
        <Link href={"/"}>
            <Heading>WC</Heading>
        </Link>

        <Link href={"/connect"} className="bg-green-400 text-white rounded-full py-2 px-4">Connect Wallet</Link>
      </Box>
    </nav>
  );
}

export default Navbar
