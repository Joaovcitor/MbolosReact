import "./style.css";
import BoloDeAniversario from "../../icons/bolo-de-aniversario.png";
import Bolo from "../../icons/bolo.png";
import Porcoes from "../../icons/coxinha.png";

export const LinksProducts = () => {
  return (
    <section className="links">
      <h1 className="linha">Nossas Linhas de Produtos</h1>
      <div className="GridProducts">
        <a href="" className="linksProducts">
          <img src={BoloDeAniversario} alt="" className="imgLink" />
          <p className="bar"></p>
          <p className="nameProduct">Bolos de Festas</p>
          <p className="description">
            Bolos para as diversas ocasiões, desde eventos pequenos até eventos
            maiores. Cada Bolo gera a vontade de repetir o prato!
          </p>
        </a>
        <a href="" className="linksProducts">
          <img src={Bolo} alt="" className="imgLink" />
          <p className="bar"></p>
          <p className="nameProduct">Bolos de Festas</p>
          <p className="description">
            Bolos para as diversas ocasiões, desde eventos pequenos até eventos
            maiores. Cada Bolo gera a vontade de repetir o prato!
          </p>
        </a>
        <a href="" className="linksProducts">
          <img src={Porcoes} alt="" className="imgLink" />
          <p className="bar"></p>
          <p className="nameProduct">Bolos de Festas</p>
          <p className="description">
            Bolos para as diversas ocasiões, desde eventos pequenos até eventos
            maiores. Cada Bolo gera a vontade de repetir o prato!
          </p>
        </a>
      </div>
    </section>
  );
};
