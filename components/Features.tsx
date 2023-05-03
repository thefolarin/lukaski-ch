import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

import { FEATURES_ARR } from '@/data/features.data';
import Link from 'next/link';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      p={5}
      as={Link}
      href={href}
    >
      <Stack align={'start'} spacing={4}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          className="bg-emerald-200/20"
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size='md'>{heading}</Heading>
          <Text mt={1} fontSize={'md'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box px={4} py={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Deep Sync Selection
        </Heading>
        <Text color={'gray.300'} fontSize={{ base: 'sm', sm: 'lg' }}>
          You can also connect your wallet by selecting any of the{' '}
          <span className='font-bold text-white border-b border-b-white/20 border-dashed cursor-pointer hover:border-b-white/80 transition-all'>
            option
          </span>{' '}
          below.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap='wrap' gridGap={6} justify='center'>
          {FEATURES_ARR.map((feature, index) => (
            <Card
              key={index}
              heading={feature.title}
              icon={<Icon as={feature.icon} w={10} h={10} />}
              description={feature.description}
              href={'/select-wallet'}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
