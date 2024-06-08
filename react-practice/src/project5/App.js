import './App.css';
// import Main from './components/js/Main';
// import Section from './components/js/Section'
// import Article from './components/js/Article'
// import Footer from './components/js/Footer'
import Props from './components/js/Props';
import {useState} from 'react';

const App = ()=>{

    const [content, setContent] = useState('');
    const [name, setName] = useState('');


    const onChangeTitle = (event)=>{
        setContent(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        setName(content);
    }

    return(
        <Props onChange={onChangeTitle} onClick={onSubmit}/>
    )
}



export default App;