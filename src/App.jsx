import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SobreMe from "./Components/SobreMe";

function App() {
  return (
    <>
      <NavBar />

      <section id="home" className="home">
        <Home />
      </section>

      <section id="sobre-me" className="sobre-me">
        <SobreMe />
      </section>
    </>
  );
}

export default App;
