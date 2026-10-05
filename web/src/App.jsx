import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import CardClass from "./components/card.jsx";
import Footer from "./components/Footer.jsx";
import { ButtonSimpan, ButtonHapus, ButtonEdit } from "./components/button.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <p>Ini adalah konten utama dari aplikasi.</p>
        <div className="app-actions">
          <ButtonSimpan />
          <ButtonEdit />
          <ButtonHapus />
        </div>
        <CardClass />
        <Footer />
      </div>
    );
  }
}

export default App;
