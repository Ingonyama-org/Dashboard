import "./App.css";
import Login from "./registration/Login";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
