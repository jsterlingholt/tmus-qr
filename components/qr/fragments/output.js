// 1. import React
import React from 'react'
import Image from 'next/image'
// 2. import Third Party Libraries
import {
	Box,
	Center,
	Container,
	Skeleton,
	SkeletonCircle,
	SkeletonText
} from '@chakra-ui/react'
import {ImQrcode} from 'react-icons/im'
import QRCode from './generate'
// 3. import QR Logic
import { QuickResponse } from '../qr'

// -----------------
// 
export function QROutput(props) {

	//generate(options)

	return(
		<Box
			px={3} py={3}
			w={["370px"]} h={["370px"]}
			//bg="rgba(255,255,255,1)"
			//borderRadius="30"
			//boxShadow="lg"
			>
			
			
			<Center
				w="350px"
				h="350px">
				{props.children}
			</Center>
		</Box>
	)
}