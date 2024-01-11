import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import TagLine from "./Components/TagLine";
import Quote from "./Components/Quote";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((obj) => {
        setQuote(obj);
      });
  }, []);
  function onButtonClick() {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((obj) => {
        setQuote(obj);
      });
  }
  return (
    <>
      <Header></Header>
      <TagLine />
      <Quote quote={quote} onButtonClick={onButtonClick} />
    </>
  );
}

export default App;
