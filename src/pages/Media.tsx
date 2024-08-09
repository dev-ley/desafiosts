import { useState, FormEvent } from "react";
import './Media.css'; // Certifique-se de criar e importar o arquivo CSS

const Media = () => {
  const [nota1, setNota1] = useState<number | null>(null);
  const [nota2, setNota2] = useState<number | null>(null);
  const [media, setMedia] = useState<number | null>(null);
  const [res, setRes] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (nota1 !== null && nota2 !== null && !isNaN(nota1) && !isNaN(nota2)) {
      const calcularMedia = (nota1 + nota2) / 2;
      setMedia(calcularMedia);
      if (calcularMedia >= 7) {
        setRes('Aprovado');
      } else if (calcularMedia >= 5) {
        setRes('Recuperação');
      } else {
        setRes('Reprovado');
      }
    }
  }

  function Clear() {
    setNota1(null);
    setNota2(null);
    setMedia(null);
    setRes(null);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Resultado das Avaliações</h2>
        <div className="form-group">
          <label htmlFor="Nota1" className="form-label">Nota1</label>
          <input
            className="form-input"
            max={10}
            min={0}
            value={nota1 !== null ? nota1 : ''}
            onChange={(e) => setNota1(e.target.value === '' ? null : parseFloat(e.target.value))}
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Nota2" className="form-label">Nota2</label>
          <input
            className="form-input"
            max={10}
            min={0}
            value={nota2 !== null ? nota2 : ''}
            onChange={(e) => setNota2(e.target.value === '' ? null : parseFloat(e.target.value))}
            type="number"
            required
          />
        </div>

        <button type="submit" className="form-button">Consultar</button>
        <button type="button" className="form-button clear-button" onClick={Clear}>Limpar</button>
        <div className="form-group">
          <label htmlFor="Media" className="form-label">Media</label>
          <input className="media-input" disabled value={media !== null ? media : ''} />
          <span className={`media-result ${
            res === 'Aprovado' ? 'aprovado' :
            res === 'Recuperação' ? 'recuperacao' :
            'reprovado'
          }`}>
            {res}
          </span>
        </div>
      </form>
    </>
  );
};

export default Media;
