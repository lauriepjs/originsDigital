import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Funzone from "./pages/Funzone";
import Navigation from "./components/Navigation";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funzone" element={<Funzone />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer />
  </BrowserRouter>
  );
}

export default App;
