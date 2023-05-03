import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ConnectWallet from '@/components/ConnectWallet'

function ConnectPage() {
  return (
    <Box className='flex flex-col gap-8'>
      <Box px={4} py={{base: 10, md: 16 }} className='flex flex-col items-center gap-2 w-full'>
        <Heading size={"2xl"}>Connect Wallet</Heading>
        <Text>Import wallet to continue</Text>
      </Box>
      <ConnectWallet />
    </Box>
  );
}

export default ConnectPage;
