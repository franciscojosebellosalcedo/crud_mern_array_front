import { useNavigate } from "react-router-dom";

const Item = () => {
  const navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
  };
  return (
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
          <i
            class="uil uil-edit-alt icon icon__edit"
            onClick={() => goTo("/editar")}
          ></i>
          <i class="uil uil-trash-alt icon icon__delete"></i>
        </div>
      </div>
    </div>
  );
};

export default Item;
