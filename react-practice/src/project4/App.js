import './App.css';
import {useState, useRef} from 'react';
import Header from './components/js/Header';
import TodoEditor from './components/js/TodoEditor';
import TodoList from './components/js/TodoList';

const mockTodo = [
    {
        id: 1,
        isDone : false,
        content: '서선생에게 질문하기',
        createdDate: new Date().getTime()
    },
    {
        id: 2,
        isDone : false,
        content: '멈선생 놀리기',
        createdDate: new Date().getTime()
    },
    {
        id: 3,
        isDone : false,
        content: '현선생 놀리기',
        createdDate: new Date().getTime()
    }
]



const App = ()=>{
    const [toDos, setTodos] = useState(mockTodo);
    const idRef = useRef(4);
    // let idRef = 4;

    const onCreate = (content) => {
        const newContent = {
            id: idRef.current,
            // id: idRef,
            content,
            createdDate: new Date().getTime()
        };
        setTodos([newContent, ...toDos]);
        idRef.current += 1;
    }
        // idRef += 1;
    // let idRef=4 // id: idRef 선언 후 idRef += 1;로 해주면 할 일 생성은 되는데 
    // id가 4로 고정 되어있음.(렌더링시 함수는 처음부터 다시 실행되며 함수안의 변수도 초기화됨)

    const onUpdate = (targetId)=>{
        setTodos(toDos.map((element)=>element.id === targetId 
        ? {...element, isDone: !element.isDone} 
        : element
    ))
    };
    
    const onDelete = (targetId) => {
        setTodos(toDos.filter(element=>element.id !== targetId))
    }

    return(
        <div className='container'>
            <Header/>
            <TodoEditor onCreate={onCreate}/>
            <TodoList toDos={toDos} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )
}

export default App;

