import {useState} from 'react';
import './Render.css';


const Render = ()=>{    
        const [count, setCount] = useState(0);
        const counting = value=>{
            setCount(value + count)
            if(value === 0 ){
                setCount(value);
            }

}    
    return(
        <div className='container'>
            <h1>Simple Counter</h1>
            <div className='countContainer'>
                <section>현재 카운트: <p>{count}</p></section>
            </div>
            <section className='btnContainer'>
                <button onClick={()=>counting(1)} className='plusBtn'>+1</button>
                <button onClick={()=>counting(10)} className='plusBtn'>+10</button>
                <button onClick={()=>counting(100)} className='plusBtn'>+100</button>
                <button onClick={()=>counting(0)} className='resetBtn'>0</button> 
                <button onClick={()=>counting(-1)} className='subTractBtn'>-1</button>
                <button onClick={()=>counting(-10)} className='subTractBtn'>-10</button>
                <button onClick={()=>counting(-100)} className='subTractBtn'>-100</button> 
            </section>
        </div>
    )
}
export default Render;