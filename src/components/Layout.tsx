import { Link } from "react-router-dom";
import './Layout.css'; // Importando o arquivo CSS

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="menu">Menu</div>
      <nav>
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/media' className="nav-link">Media</Link>
        <Link to='/dado' className="nav-link">Dado</Link>
        <Link to='/quiz' className="nav-link">Quiz</Link>
      </nav>
    </div>
  );
};

export default Layout;
