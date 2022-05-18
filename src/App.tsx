import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Client from "./pages/client/client";
import Company from "./pages/company/company";
import Home from "./pages/home/home";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Home>
        <Router>
          <Routes>
            <Content>
              <Route path="/client" element={<Client />} />
              <Route path="/company" element={<Company />} />
            </Content>
          </Routes>
        </Router>
      </Home>
    </div>
  );
}

export default App;
