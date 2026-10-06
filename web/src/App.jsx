import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/card.jsx";
import Footer from "./components/Footer.jsx";
import KartuProfile from "./components/kartuprofile.jsx";
import {
  ButtonSimpan,
  ButtonEdit,
  ButtonHapus,
  PengelolaanAplikasi,
} from "./components/button.jsx";
import UseStateExamples from "./components/usestate.jsx";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Header />

      <main className="app-content">
        <section className="intro">
          <p>Ini adalah konten utama dari aplikasi.</p>
        </section>

        <div className="app-actions" aria-label="Aksi aplikasi">
          <ButtonSimpan />
          {" "}
          <ButtonEdit />
          {" "}
          <ButtonHapus />
        </div>

        <PengelolaanAplikasi />
        <UseStateExamples />

        <div className="card-grid">
          <Card />
          <KartuProfile nama="Naomi Najla" perkerjaan="Software Engineer" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
