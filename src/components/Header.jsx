import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <>
           <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
          <b style={{color:'red',fontSize:"18px"}} >Quote Generator</b>  
          </Navbar.Brand>
        </Container>
      </Navbar>
          
        </>
  )
}

export default Header