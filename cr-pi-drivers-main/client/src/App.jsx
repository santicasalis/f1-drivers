import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import { Detail, Form, Landing, Home } from "./views/index";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
