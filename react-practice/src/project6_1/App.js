import {useReducer, useRef } from "react";
import './App.css';

const reducer = (totalPrice, action)=>{
    switch(action.type){
        case 'APPLE':
            return totalPrice + 1000; 
        case 'BANANA':
            return totalPrice + 500;  
        case 'CHERRY':
            return totalPrice + 2000; 
    }
}





export default function App(){

    const [totalPrice, dispatch] = useReducer(reducer, 0);
    const appleRef = useRef(0);
    const bananaRef = useRef(0);
    const cherryRef = useRef(0);


    const add_apple_on_cart = ()=>{
        dispatch({type: 'APPLE'})
        appleRef.current += 1
    }
    const add_banana_on_cart = ()=>{
        dispatch({type: 'BANANA'})
        bananaRef.current += 1
    }
    const add_cherry_on_cart = ()=>{
        dispatch({type: 'CHERRY'})
        cherryRef.current += 1
    }

    return(
        <div className="container">
            <p>사과🍎</p> 
            <p>1000원</p> 
            <button onClick={add_apple_on_cart}>장바구니에 담기</button> 
            <p>총 수량: {appleRef.current}</p>
            
            <p>바나나🍌</p>
            <p>500원</p>
            <button onClick={add_banana_on_cart}>장바구니에 담기</button>
            <p>총 수량: {bananaRef.current}</p>
            
            <p>체리🍒</p>
            <p>2000원</p>
            <button onClick={add_cherry_on_cart}>장바구니에 담기</button>
            <p>총 수량: {cherryRef.current}</p>

            <p>총 가격: {totalPrice}</p>
        </div>
    )
}

// 
// 
// 