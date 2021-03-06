// 1. import React
// 2. import Chakra
import React from 'react'
import ReactDOM from 'react-dom'
import {
    chakra,
    Center,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react'
import { motion } from "framer-motion"
// 3. import all qr logic
import { QuickResponse } from '../qr'

import { ImDownload,ImQrcode } from 'react-icons/im'
import { GoCloudDownload } from 'react-icons/go'
export function QRButton(props){
  return(
    <>
        <chakra.button
          w={["10em", "12em",]}
          h={props.h}
          form="input"
          bg="white"
          color={props.color}
          border=".2em solid"
          borderColor={props.color}
          borderRadius="50"
          fontWeight="bold"

          _hover={{ boxShadow: "lg" }}
          _active={{ boxShadow:"md" }}
          _disabled={{ borderColor:"rgba(0,0,0,1)" }}
          outline="0"
          onClick={props.action}
          type="submit"
          userSelect="none">
            
            <Center
              centerContent>

              <Stack
                direction="row">

                {props.children}
              </Stack>
            </Center>
        </chakra.button>
    </>
  )
}



export default function QRActions(props){


  return(
    <Stack
      direction="row"
      maxW="430px"
      px={0}
      pt={[10,10,5]}
      bottom={5}
      pos="sticky">

      <Flex>

        <QRButton
          w="13em"
          h="4em"
          color="primary.0"
          action={props.actionLeft}>
          
          <ImQrcode
            fontSize="2em"
            color="primary.0"/>
              
          <Text
            px={[0,1,2]}
            py={1}>
            GENERATE
          </Text>
        </QRButton>
      </Flex>


      <Flex>
        <QRButton
          w="13em"
          h="4em"
          color="rgba(0,0,0,0.2)"
          action={props.actionRight}
          disabled>

          <GoCloudDownload
            fontSize="2em"
            color="rgba(0,0,0,0.2)"
            cursor=""/>
              
          <Text
            px={[0,1,2]}
            py={1}>
            DOWNLOAD
          </Text>
        </QRButton>
      </Flex>
    </Stack>
  )
}