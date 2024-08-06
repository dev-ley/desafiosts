// src/pages/Calculadora.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ecf0f1;
  padding: 20px;
`;

const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #3498db;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 10px;

  &:hover {
    background-color: #2980b9;
  }

  &:last-of-type {
    background-color: #e74c3c;
    margin-right: 0;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

const Result = styled.div<{ visible: boolean }>`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const ResultTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #3498db;
`;

const ResultText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
`;

const Calculadora: React.FC = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [nomer, setNomer] = useState('');
  const [idader, setIdader] = useState('');
  const [pesor, setPesor] = useState('');
  const [alturar, setAlturar] = useState('');
  const [imc, setImc] = useState('');
  const [resultVisible, setResultVisible] = useState(false);

  const Dados = (e: React.FormEvent) => {
    e.preventDefault();
    setNomer(nome);
    setIdader(idade);
    setPesor(peso);
    setAlturar(altura);
    setImc(calcularIMC(peso, altura));
    setResultVisible(true); // Mostrar resultado após submissão

  };

  const calcularIMC = (peso: string, altura: string) => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // Converter altura de cm para metros
    if (pesoNum && alturaNum) {
      return (pesoNum / (alturaNum * alturaNum)).toFixed(2);
    }
    return '';
  };

  return (
    <Container>
      <Form onSubmit={Dados}>
        <FormGroup>
          <Label htmlFor="nome">Nome:</Label>
          <Input 
            type="text"
            value={nome}  
            onChange={(e) => setNome(e.target.value)}
            autoFocus 
            required 
            name="nome"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="idade">Idade:</Label>
          <Input 
            onChange={(e) => setIdade(e.target.value)} 
            value={idade} 
            type="number" 
            required 
            name="idade"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="peso">Peso:</Label>
          <Input 
            onChange={(e) => setPeso(e.target.value)} 
            value={peso} 
            type="text" 
            required 
            name="peso"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="altura">Altura:</Label>
          <Input 
            onChange={(e) => setAltura(e.target.value)} 
            value={altura} 
            type="text" 
            required 
            name="altura"
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Enviar</Button>
          <Button 
            type="reset" 
            onClick={() => {
              setNome('');
              setIdade('');
              setPeso('');
              setAltura('');
              setNomer('');
              setIdader('');
              setPesor('');
              setAlturar('');
              setImc('');
              setResultVisible(false); // Ocultar resultado ao limpar
            }}
          >
          Limpar
          </Button>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="imc">IMC:</Label>
          <Input 
            value={imc} 
            type="text" 
            disabled 
            required 
            name="imc"
          />
        </FormGroup>
      </Form>
      <Result visible={resultVisible}>
        <ResultTitle>Aluno</ResultTitle>
        <ResultText>Nome: {nomer}</ResultText>
        <ResultText>Idade: {idader}</ResultText>
        <ResultText>Peso: {pesor}</ResultText>
        <ResultText>Altura: {alturar}</ResultText>
        <ResultText>IMC: {imc}</ResultText>
      </Result>
    </Container>
  );
};

export default Calculadora;