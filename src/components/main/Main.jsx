import { useNavigate } from "react-router-dom";
import "./main.css";

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
          <div className="item">
            <div className="item__data">
              <span>Francisco</span>
            </div>

            <div className="item__data">
              <span>3207566039</span>
            </div>

            <div className="item__data">
              <span>1007130073</span>
            </div>

            <div className="item__data">
              <div>
                <i class="uil uil-edit-alt icon icon__edit" onClick={()=>goTo("/editar")}></i>
                <i class="uil uil-trash-alt icon icon__delete"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Main;
