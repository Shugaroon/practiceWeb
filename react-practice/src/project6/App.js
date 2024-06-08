import "./App.css";
import { useState } from "react";

const fruitInfo = [
  {
    id: 0,
    name: "사과",
    price: 1000,
  },
  {
    id: 1,
    name: "바나나",
    price: 500,
  },
  {
    id: 2,
    name: "cherry",
    price: 2000,
  },
];

export default function App() {
  const [appleQuantity, setAppleQuantity] = useState(0);

  const onClick = () => {
    setAppleQuantity(appleQuantity + 1);
  };

  return (
    <div>
      <AddBtnCompo />
      <FruitQuantityCompo />
    </div>
  );
}
