import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
