
import React from 'react'
import Link from 'next/link';
import { Box, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Logo(props) {

  // logic for tmo logo animation

  const animate = () => {
    // call logic to animate dots
    let left = ("rotate:90, x:-30")
    let right = ("rotate:90, x:30")

  }

  const reset = e => {

  }

  return(
    <Box
      py={props.py}
      px={props.px}>
      

      <Link href={props.href}>
        <a>
          <motion.svg
            width="35px"
            height="35px"
            viewBox="0 0 200 260"
            onMouseEnter={animate}
            onClick={animate}
            onMouseLeave={reset}>

            
            <path
              d="
              M85.3877137,
              12.0680059 C42.8745061,
              12.8029059 17.5346942,
              40.5916501 13.7988097,
              91.4070004 L-1.70530257e-13,
              89.2131839 L2.63472538,
              1.42108547e-14 L208.404323,
              4.26325641e-14 L211,
              89.2131839 L197.218454,
              91.4070004 C193.48298,
              40.5916501 168.505289,
              12.8029059 125.630783,
              12.0680059 L125.630783,
              198.892716 C125.630783,
              232.890823 131.603101,
              238.387458 168.874808,
              238.749465 L168.874808,
              253 L42.1362896,
              253 L42.1362896,
              238.749465 C79.4071746,
              238.387458 85.3877137,
              232.890823 85.3877137,
              198.892716 L85.3877137,
              12.0680059 Z" 
              fill={props.color}/>

              
              <motion.rect 
                fill={props.dotColor}
                x="0" y="127" 
                width="45"
                height="45"
                animate={(animate.left)}/>

              <motion.rect 
                fill={props.dotColor}
                x="162" y="127" 
                width="45"
                height="45"/>
          </motion.svg>
        </a>
      </Link>
    </Box>
  );
}







  <path
    d="M27.65555,0 L28,11.9891235 L26.1711692,12.2839447 C25.6754666,5.45500437 22.3608914,1.72054862 16.6713835,1.62178735 L16.6713835,26.7286653 C16.6713835,31.2975809 17.4639186,32.0362591 22.4099271,32.0849084 L22.4099271,34 L5.59154554,34 L5.59154554,32.0849084 C10.537445,32.0362591 11.331071,31.2975809 11.331071,26.7286653 L11.331071,1.62178735 C5.68950792,1.72054862 2.32687885,5.45500437 1.83112167,12.2839447 L0,11.9891235 L0.349631805,0 L27.65555,0 Z M28,17 L28,24 L21,24 L21,17 L28,17 Z M7,17 L7,24 L0,24 L0,17 L7,17 Z" transform="translate(14.000000, 17.000000) scale(-1, 1) translate(-14.000000, -17.000000)"/>







export function QRLogo(props) {

  // this sucks rn
  return(
    <svg 
      width={props.size}
      height={props.size}
      viewBox="0 0 60 60">

     <path
        d="M31,32 C33.209139,32 35,33.790861 35,36 L35,43 C35,45.209139 33.209139,47 31,47 L24,47 C21.790861,47 20,45.209139 20,43 L20,36 C20,33.790861 21.790861,32 24,32 L31,32 Z M53.8333333,41 C54.3856181,41 54.8333333,41.4477153 54.8333333,42 L54.8333333,46 C54.8333333,46.5522847 54.3856181,47 53.8333333,47 L49.8333333,47 C49.2810486,47 48.8333333,46.5522847 48.8333333,46 L48.8333333,42 C48.8333333,41.4477153 49.2810486,41 49.8333333,41 L53.8333333,41 Z M31,34 L24,34 C22.9456382,34 22.0818349,34.8158778 22.0054857,35.8507377 L22,36 L22,43 C22,44.0543618 22.8158778,44.9181651 23.8507377,44.9945143 L24,45 L31,45 C32.0543618,45 32.9181651,44.1841222 32.9945143,43.1492623 L33,43 L33,36 C33,34.8954305 32.1045695,34 31,34 Z M43.8333333,41 C44.3856181,41 44.8333333,41.4477153 44.8333333,42 L44.8333333,44 C44.8333333,44.5522847 44.3856181,45 43.8333333,45 L41.8333333,45 C41.2810486,45 40.8333333,44.5522847 40.8333333,44 L40.8333333,42 C40.8333333,41.4477153 41.2810486,41 41.8333333,41 L43.8333333,41 Z M29,37 C29.5522847,37 30,37.4477153 30,38 L30,41 C30,41.5522847 29.5522847,42 29,42 L26,42 C25.4477153,42 25,41.5522847 25,41 L25,38 C25,37.4477153 25.4477153,37 26,37 L29,37 Z M47.8333333,36 C48.9379028,36 49.8333333,36.8954305 49.8333333,38 L49.8333333,39 C49.8333333,40.1045695 48.9379028,41 47.8333333,41 L46.8333333,41 C45.7287638,41 44.8333333,40.1045695 44.8333333,39 L44.8333333,38 C44.8333333,36.8954305 45.7287638,36 46.8333333,36 L47.8333333,36 Z M43.8333333,32 C44.3856181,32 44.8333333,32.4477153 44.8333333,33 L44.8333333,35 C44.8333333,35.5522847 44.3856181,36 43.8333333,36 L40.8333333,36 C40.2810486,36 39.8333333,35.5522847 39.8333333,35 L39.8333333,33 C39.8333333,32.4477153 40.2810486,32 40.8333333,32 L43.8333333,32 Z M53.8333333,32 C54.3856181,32 54.8333333,32.4477153 54.8333333,33 L54.8333333,35 C54.8333333,35.5522847 54.3856181,36 53.8333333,36 L51.8333333,36 C51.2810486,36 50.8333333,35.5522847 50.8333333,35 L50.8333333,33 C50.8333333,32.4477153 51.2810486,32 51.8333333,32 L53.8333333,32 Z M51,12 C53.209139,12 55,13.790861 55,16 L55,23 C55,25.209139 53.209139,27 51,27 L44,27 C41.790861,27 40,25.209139 40,23 L40,16 C40,13.790861 41.790861,12 44,12 L51,12 Z M31,12 C33.209139,12 35,13.790861 35,16 L35,23 C35,25.209139 33.209139,27 31,27 L24,27 C21.790861,27 20,25.209139 20,23 L20,16 C20,13.790861 21.790861,12 24,12 L31,12 Z M51,14 L44,14 C42.9456382,14 42.0818349,14.8158778 42.0054857,15.8507377 L42,16 L42,23 C42,24.0543618 42.8158778,24.9181651 43.8507377,24.9945143 L44,25 L51,25 C52.0543618,25 52.9181651,24.1841222 52.9945143,23.1492623 L53,23 L53,16 C53,14.8954305 52.1045695,14 51,14 Z M31,14 L24,14 C22.9456382,14 22.0818349,14.8158778 22.0054857,15.8507377 L22,16 L22,23 C22,24.0543618 22.8158778,24.9181651 23.8507377,24.9945143 L24,25 L31,25 C32.0543618,25 32.9181651,24.1841222 32.9945143,23.1492623 L33,23 L33,16 C33,14.8954305 32.1045695,14 31,14 Z M49,17 C49.5522847,17 50,17.4477153 50,18 L50,21 C50,21.5522847 49.5522847,22 49,22 L46,22 C45.4477153,22 45,21.5522847 45,21 L45,18 C45,17.4477153 45.4477153,17 46,17 L49,17 Z M29,17 C29.5522847,17 30,17.4477153 30,18 L30,21 C30,21.5522847 29.5522847,22 29,22 L26,22 C25.4477153,22 25,21.5522847 25,21 L25,18 C25,17.4477153 25.4477153,17 26,17 L29,17 Z"
        fill={props.color}/>

    </svg>
  )
}