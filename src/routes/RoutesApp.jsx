import {BrowserRouter,Routes,Route  } from "react-router-dom";
import Main from "../components/main/Main";
import Add from "../components/add/Add";
import Edit from "../components/edit/Edit";
const RoutesApp = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/crear" element={<Add/>}/>
        <Route path="/editar" element={<Edit/>}/>
        <Route path="*" element={<Main/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default RoutesApp