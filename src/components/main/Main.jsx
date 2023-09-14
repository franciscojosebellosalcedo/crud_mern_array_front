import { useNavigate } from "react-router-dom";
import "./main.css";
import Item from "./Item";

const Main = () => {
  const navigate=useNavigate();

  const goTo=(url)=>{
    navigate(url)
  }

  return (
    <section className="main">
      <div className="container">
        <h1 className="main__title">Registros</h1>
        <button className="btn__success btn__add" onClick={()=>goTo("/crear")}>Agregar</button>
        
        <div className="container__users">
          <Item/>
        </div>

      </div>
    </section>
  );
};

export default Main;
