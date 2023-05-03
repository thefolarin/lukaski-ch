import { Link } from '@chakra-ui/react';
import React from 'react'

function Footer() {
  return (
    <footer className='w-full'>
      <div className='w-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between'>
        <span>© 2023. Multiverse Wallet Rectification.</span>
        <div className='flex items-center gap-3 flex-wrap'>
            <Link href='/'>Terms of service</Link>
            <Link href='/'>Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer
