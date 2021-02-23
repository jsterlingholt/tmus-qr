import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

import TmoLogo from './tmo-logo';

export default function QRNav() {

  return (
    <>
      <Navbar>
        <TmoLogo />
        <b>QR</b> Generator
      </Navbar>
    </>
  )
}