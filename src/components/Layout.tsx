// src/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
    color: #3498db;
  }
`;

const Layout: React.FC = () => {
  return (
    <Navbar>
      <Title>Meus Desafios</Title>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/calculadora">Calculadora</StyledLink>
      </NavLinks>
    </Navbar>
  );
};

export default Layout;
