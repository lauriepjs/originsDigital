import './App.css';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Funzone from "./pages/Funzone";
import Navigation from "./components/Navigation";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import client from "./utils/client";


function App() {
  return (
    <ApolloProvider client={client}>
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

    <Footer />
  </BrowserRouter>
  </ApolloProvider>
  );
}

export default App;
