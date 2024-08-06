// src/pages/Notefounder.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ecf0f1;
  padding: 20px;
`;

const Message = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #e74c3c;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Notefounder: React.FC = () => {
  return (
    <Container>
      <Message>
        <Title>Página Não Encontrada</Title>
        <Text>Desculpe, a página que você está procurando não foi encontrada.</Text>
      </Message>
    </Container>
  );
};

export default Notefounder;
