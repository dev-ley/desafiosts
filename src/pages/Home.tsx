// src/pages/Home.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: #fff;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f1c40f;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 15px;
  }
`;

const Section = styled.section`
  width: 80%;
  max-width: 900px;
  background-color: #fff;
  color: #333;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: -150px;
  left: -150px;
  z-index: -1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo aos Desafios</Title>
      <Section>
        <Circle />
        <Subtitle>Desafios e Crescimento</Subtitle>
        <Paragraph>
          Os desafios são uma parte essencial do crescimento. Eles nos forçam a sair da nossa zona de conforto e explorar novas possibilidades. Cada desafio que enfrentamos é uma oportunidade para aprender, crescer e se tornar melhor.
        </Paragraph>
      </Section>
      <Section>
        <Subtitle>Como Enfrentar Desafios</Subtitle>
        <Paragraph>
          Enfrentar desafios exige coragem e determinação. Estabeleça metas claras, mantenha uma mentalidade positiva e procure aprender com cada obstáculo que surgir. Com prática e perseverança, você pode superar qualquer dificuldade e alcançar seus objetivos.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Home;
