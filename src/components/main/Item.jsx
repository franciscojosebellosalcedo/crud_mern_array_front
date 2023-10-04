import { useNavigate } from "react-router-dom";
import { useContextUsears } from "../../context/ProviderUsers";
import MessageAction from "../messageAction/MessageAction";
import { useContextMessage } from "../../context/ProviderMessage";

const Item = (props) => {
  const navigate = useNavigate();
  const { users, setUsers, setUserSelected } = useContextUsears();
  const { setMessage, setIsOpen, setNeedButtons } = useContextMessage();

  const deleteUserRequest = async (identity) => {
    try {
      const request = await fetch(process.env.REACT_APP_URL_BASE + "/delete/" + identity, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const responseDataRequest = await request.json();
      if (!responseDataRequest.response) {
        setMessage({ text: "Error al eliminar usuario", type: "error" });
        setNeedButtons(false);
        setIsOpen(true);
      } else {
        let listUsers = [...users];
        listUsers.splice(responseDataRequest.index, 1);
        setUsers([...listUsers]);
      }
    } catch (error) {
      setMessage({ text: "Error al eliminar usuario", type: "error" });
      setNeedButtons(false);
      setIsOpen(true);
    }
  }

  const goTo = (url) => {
    navigate(url);
  };
  return (
    <div className="grid__item" key={props.item.identity}>
      <div className="item__data">
        <strong>Nombre:</strong>
        <span>{props.item.name}</span>
      </div>

      <div className="item__data">
        <strong>Teléfono:</strong>
        <span>{props.item.phone}</span>
      </div>

      <div className="item__data">
        <strong>Indentidad:</strong>
        <span>{props.item.identity}</span>
      </div>

      <div className="item__data">
        <div>
          <i
            class="uil uil-edit-alt icon icon__edit"
            onClick={() => {
              setUserSelected(props.item);
              goTo("/editar");
            }}
          ></i>
          <i class="uil uil-trash-alt icon icon__delete" onClick={() => deleteUserRequest(props.item.identity)}></i>
        </div>
      </div>
      <MessageAction />
    </div>
  );
};

export default Item;
