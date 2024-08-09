import { useState } from "react";
import dado1 from "../assets/dados/dado1.png";
import dado2 from "../assets/dados/dado2.png";
import dado3 from "../assets/dados/dado3.png";
import dado4 from "../assets/dados/dado4.png";
import dado5 from "../assets/dados/dado5.png";
import dado6 from "../assets/dados/dado6.png";
import "./Dado.css"; // Importando o arquivo CSS
import diceSound from '../assets/dados/dice.mp3';


const audio = new Audio(diceSound);



const Dado = () => {
  const [numero, setNumero] = useState<number | string>('?');
  const [img, setImg] = useState<string>(dado1);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  function sortear() {
    setIsRolling(true);
    const numerosorteado = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      audio.play(); // Tocar o áudio ao clicar no botão
    }, 100);

    setTimeout(() => {
      setNumero(numerosorteado);
      switch (numerosorteado) {
        case 1:
          setImg(dado1);
          break;
        case 2:
          setImg(dado2);
          break;
        case 3:
          setImg(dado3);
          break;
        case 4:
          setImg(dado4);
          break;
        case 5:
          setImg(dado5);
          break;
        case 6:
          setImg(dado6);
          break;
        default:
          setImg(dado6);
      }
      setIsRolling(false);
    }, 1000); // 1 segundo de delay
  }

  return (
    <div className="dado-container">
      <div className="dado-title">Boa Sorte!</div>
      <div>
        <span className="dado-number">{numero}</span>
        <img className={`dado-img ${isRolling ? "rolling" : ""}`} src={img} alt="Dado" />
      </div>
      <button className="dado-button" onClick={sortear} disabled={isRolling}>
        Sortear
      </button>
    </div>
  );
}

export default Dado;
