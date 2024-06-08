import "./App.css";
import { useState } from "react";
// import AddBtnCompo from './component/js/AddBtnCompo';
// import FruitQuantityCompo from './component/js/FruitQuantityCompo';
// import TotalPriceCompo from './component/js/TotalPriceCompo';



export default function App() {
  const [appleQuantity, setAppleQuantity] = useState(0);
  const [bananaQuantity, setBananaQuantity] = useState(0);
  const [cherryQuantity, setCherryQuantity] = useState(0);
  const [TotalFruitPrice, setTotalFruitPrice] = useState(0);

  const appleAddCartBtn = () => {
    setAppleQuantity(appleQuantity + 1);
    setTotalFruitPrice(TotalFruitPrice + 1000);
  };

  const bananaAddCartBtn = () => {
    setBananaQuantity(bananaQuantity + 1);
    setTotalFruitPrice(TotalFruitPrice + 500);
  };

  const cherryAddCartBtn = () => {
    setCherryQuantity(cherryQuantity + 1);
    setTotalFruitPrice(TotalFruitPrice + 2000);
  };

  return (
          <div className="all_container">
            <div className="apple_container container">
                <p>사과🍎</p>
                <p>1000원</p>
                <button id="btn1" onClick={appleAddCartBtn}>장바구니에 추가</button>
                <p>수량: {appleQuantity}</p>
            </div>
            <div className="banana_container container">
              <p>바나나🍌</p>
              <p>500원</p>
              <button id="btn2" onClick={bananaAddCartBtn}>장바구니에 추가</button>
              <p>수량: {bananaQuantity}</p>
            </div>
            <div className="cherry_container container">
              <p>체리🍒</p>
              <p>2000원</p>
              <button id="btn3" onClick={cherryAddCartBtn}>장바구니에 추가</button>
              <p>수량: {cherryQuantity}</p>
            </div>
            <p className="totalPriceContainer">총 가격: {TotalFruitPrice}</p>
          </div>
          
          
  )
}
      

