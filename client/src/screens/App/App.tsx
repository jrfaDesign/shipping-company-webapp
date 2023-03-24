import { Route, Routes } from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import Home from "../Home";

import { RouteBlocker } from "../../routes/RouteBlocker";

import { AppContainer } from "./styles";

function App() {
  return (
    <div>
      <AppContainer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<RouteBlocker />}>
            <Route index element={<Home />} />
            {/* 
            Add page here
            */}
          </Route>
        </Routes>
      </AppContainer>
    </div>
  );
}

export default App;
