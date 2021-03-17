// 1. import React
import React from 'react'
import Image from 'next/image'
// 2. import Third Party Libraries
import {
	Box,
	Container,
	Skeleton,
	SkeletonCircle,
	SkeletonText
} from '@chakra-ui/react'
import {ImQrcode} from 'react-icons/im'
import QRCode from './generate'
// 3. import QR Logic
import { QuickResponse } from '../qr'


export function generate(props) {
	
 	var options = {
		// ====== Basic
    	text:(props.QRData),
    	width: 320,
    	height: 320,
    	colorDark : "#E20074",
    	colorLight : "#ffffff",
    	correctLevel : QRCode.CorrectLevel.Q, // H, M, Q, H

    	// ====== dotScale
    	dotScale: 0.8, // For body block, must be greater than 0, less than or equal to 1. default is 1
    	dotScaleTiming: 0.8, // Default for timing block , must be greater than 0, less than or equal to 1. default is 1

    	logo:"tmologo-sm.svg", // Relative address, relative to `easy.qrcode.min.js`
    	logoWidth:120, // width. default is automatic width
    	logoHeight:120, // height. default is automatic height
    	logoBackgroundColor:'#E20074', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    	logoBackgroundTransparent:true, // Whether use transparent image, default is false
    };
	
	console.log("generated from output.js")

    // where should the QR Code be spit out to?

    //this.qrcode=new QRCode(this.qrcodeDOM.current, options);
}






// -----------------
// 
export function QROutput(props) {

	return(
		<Box
			py={props.py} px={props.px}
			w={["330px", "430px"]}
			h={["330px", "430px"]}
			color="black"
			bg="white"
			borderRadius="30"
			boxShadow="2xl">


			{props.data}	
		</Box>
	)
}

/*

<ImQrcode
	fontSize="500"
	color="rgba(0,0,0,0.05)"/>

*/



/*
export class OldOutput extends React.Component {
	constructor(props){
		super(props);
		// QRCode DOM
    	this.qrcodeDOM = React.createRef();
    	this.qrcode=null;

		this.state = {
			QRData: "poop"
		}
	}

	//QRCode generator
	

  	// generate QR code on mount
	componentDidMount = (qrcodeDOM) => {
		this.generate()
	}





	render(){
		return(
			<Container>
				<Row>
					<Col>
						<legend>Result</legend>
						<div id="qrResult" ref={this.qrcodeDOM} />
					</Col>
				</Row>
			</Container>
		)
	}
*/
