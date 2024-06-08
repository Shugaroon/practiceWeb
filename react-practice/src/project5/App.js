import "./App.css";
// import Main from './components/js/Main';
// import Section from './components/js/Section'
// import Article from './components/js/Article'
// import Footer from './components/js/Footer'
// import Props from "./components/js/Props";
import { useState } from "react";

const Greeting = ({ name, value, onChange, onClick }) => {
  return (
    <div className="greeting">
      <input value={value} onChange={onChange} />
      <button onClick={onClick}>클릭</button>
      <p>안녕하세요, {name}</p>
    </div>
  );
};

export default function App() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setName(value);
  };

  return <Greeting name={name} onChange={onChange} onClick={onClick} />;
}
