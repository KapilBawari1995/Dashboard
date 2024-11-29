import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';  
import { Navbar, Container, Row, Col } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3 z_index_999 postion_fixd">
      <Container fluid>
     
        <Row className="w-100 align-items-center d-flex justify-content-between">
          <Col md={3} sm={6} xs={12} className="d-flex align-items-center">
          
            <img src="https://goshoponline.netlify.app/assets/logo-Dq7Es58G.png" alt="Logo" style={{ height: '30px', width: 'auto' }} /> 
          </Col>

          
          <Col md={3} sm={6} xs={12} className="d-flex justify-content-end align-items-center">
            <FaBell size={20} className="me-3" />
            <div className="d-flex align-items-center">
              <span className="me-2">Kapil Bawari</span>
              <FaUserCircle size={30} />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
