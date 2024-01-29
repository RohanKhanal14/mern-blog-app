import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Projects from "./Pages/Projects";
import Header from "./components/Header";
import Footerr from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footerr />
    </BrowserRouter>
  );
}

export default App;
