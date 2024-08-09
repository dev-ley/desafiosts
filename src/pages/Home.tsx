import './Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="intro-section">
          <h1>Bem-vindo ao Meu Portfólio</h1>
          <p>Explore os desafios que completei utilizando React e TypeScript.</p>
          
        </div>
      </header>
      <section className="home-challenges">
        <h2>Desafios Completados</h2>
        <ul>
          <li>
           Desafio 1: Calculadora de Média
          </li>
          <li>
            Desafio 2: Manipulação de Dados
          </li>
          <li>
            Desafio 3: Aplicação de Lista de Tarefas
          </li>
          {/* Adicione mais desafios conforme necessário */}
        </ul>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Meu Nome. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
