import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MyList from "./components/MyList";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <MyList />
      <Footer />
    </>
  );
}

export default App;
