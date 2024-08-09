import React, { useState, useEffect } from 'react';
import './Quiz.css';
import quizData from './bd.json'; // Ajuste o caminho conforme necessário
import clear from '../assets/quiz/clear.mp3'
import fail from  '../assets/quiz/fail.mp3'

const audioclear = new Audio(clear);
const audiofail = new Audio(fail);

// Definindo tipos para os dados do quiz
interface Opcao {
  valor: string;
  texto: string;
}

interface Questao {
  pergunta: string;
  opcoes: Opcao[];
  respostaCorreta: string;
}

// Função para embaralhar um array
const embaralharArray = <T,>(array: T[]): T[] => {
  return array
    .map((item) => ({ item, index: Math.random() }))
    .sort((a, b) => a.index - b.index)
    .map(({ item }) => item);
};

const Quiz = () => {
  // Estados para controlar o quiz
  const [questoesEmbaralhadas, setQuestoesEmbaralhadas] = useState<Questao[]>([]);
  const [questoesSelecionadas, setQuestoesSelecionadas] = useState<Questao[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [perguntaAtual, setPerguntaAtual] = useState<number>(0);
  const [quizFinalizado, setQuizFinalizado] = useState<boolean>(false);
  const [quizIniciado, setQuizIniciado] = useState<boolean>(false); // Verifica se o quiz foi iniciado

  // Embaralha o array de questões no início e armazena em um estado
  useEffect(() => {
    const questoesEmbaralhadas = embaralharArray(quizData); // Embaralha todas as questões no início
    setQuestoesEmbaralhadas(questoesEmbaralhadas);
  }, []);

  // Função para lidar com a resposta do quiz
  const resposta = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorResposta = e.target.value;
    const questaoAtual = questoesSelecionadas[perguntaAtual];

    // Adicionar a classe apropriada ao <span>
    const spanElement = e.target.nextElementSibling as HTMLElement;
    if (questaoAtual.respostaCorreta === valorResposta) {
      console.log('acertou!');
      setTotal(prevTotal => prevTotal + 10);
      audioclear.play(); // Tocar o áudio ao clicar no botão


      if (spanElement) spanElement.classList.add('acertou');
    } else {
      console.log('errou');
      audiofail.play(); // Tocar o áudio ao clicar no botão

      if (spanElement) spanElement.classList.add('errou');
    }

    // Desabilitar todos os inputs
    document.querySelectorAll('.quiz-options input').forEach(input => {
      (input as HTMLInputElement).disabled = true;
    });
  };

  // Função para ir para a próxima pergunta e resetar classes e inputs
  const proximaPergunta = () => {
    if (perguntaAtual < questoesSelecionadas.length - 1) {
      // Limpar classes 'acertou' e 'errou' dos spans
      document.querySelectorAll('.quiz-options .option-text').forEach(span => {
        (span as HTMLElement).classList.remove('acertou', 'errou');
      });

      // Desmarcar todos os inputs
      document.querySelectorAll('.quiz-options input').forEach(input => {
        (input as HTMLInputElement).checked = false;
      });

      // Ir para a próxima pergunta
      setPerguntaAtual(prev => prev + 1);
    } else {
      // Finalizar o quiz e mostrar a pontuação final
      setQuizFinalizado(true);
    }

    // Reabilitar todos os inputs para a próxima pergunta
    document.querySelectorAll('.quiz-options input').forEach(input => {
      (input as HTMLInputElement).disabled = false;
    });
  };

  // Função para reiniciar o quiz
  const reiniciarQuiz = () => {
    // Embaralhar novamente as questões e resetar o quiz
    const novasQuestoesEmbaralhadas = embaralharArray(quizData);
    setQuestoesEmbaralhadas(novasQuestoesEmbaralhadas);
    setQuestoesSelecionadas([]);
    setQuizIniciado(false);
    setPerguntaAtual(0);
    setTotal(0);
    setQuizFinalizado(false);
  };

  // Função para selecionar o número de questões e iniciar o quiz
  const selecionarNumeroQuestoes = (num: number) => {
    const questoesParaJogar = questoesEmbaralhadas.slice(0, num); // Seleciona o número de questões desejadas do array embaralhado
    setQuestoesSelecionadas(questoesParaJogar);
    setPerguntaAtual(0);
    setTotal(0);
    setQuizFinalizado(false);
    setQuizIniciado(true);
  };

  const questaoAtual = questoesSelecionadas[perguntaAtual];

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h2>Quiz</h2>
        <p>Marque a resposta correta</p>
      </header>

      <div className="quiz-question">
        {!quizIniciado ? (
          <div className="quiz-selection">
            <p>Escolha o número de perguntas:</p>
            <button onClick={() => selecionarNumeroQuestoes(5)}>Melhor de 5</button>
            <button onClick={() => selecionarNumeroQuestoes(10)}>Melhor de 10</button>
            <button onClick={() => selecionarNumeroQuestoes(20)}>Melhor de 20</button>
          </div>
        ) : (
          <>
            {quizFinalizado ? (
              <div className="quiz-final">
                <h3>Quiz Finalizado!</h3>
                <p>Seus Pontos: {total}</p>
                <button onClick={reiniciarQuiz}>Voltar à Seleção de Perguntas</button>
              </div>
            ) : (
              <>
                <h3>{questaoAtual ? questaoAtual.pergunta : 'Carregando...'}</h3>
                <div className="quiz-options">
                  {questaoAtual ? questaoAtual.opcoes.map((opcao: Opcao) => (
                    <label key={opcao.valor}>
                      <input
                        onChange={resposta}
                        type="radio"
                        name="quiz-option"
                        value={opcao.valor}
                      />
                      <span className="option-text">{opcao.texto}</span>
                    </label>
                  )) : null}
                </div>
                <button onClick={proximaPergunta}>Next</button>
                <h3>Seus Pontos: {total}</h3>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
