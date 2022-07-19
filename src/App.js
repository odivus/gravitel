import Login from "../src/Components/Login/Login";
import Dashboard from "../src/Components/Dashboard/Dashboard";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
