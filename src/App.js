import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Hotel, List, Login } from "./pages";
import "./assets/scss/bootstrap.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
