import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#88dddd',
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container fluid>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
