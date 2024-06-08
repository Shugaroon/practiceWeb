import TodoItem from './TodoItem';
import {useState} from 'react';
import '../css/TodoList.css';

const TodoList = ({toDos, onUpdate, onDelete})=>{
    const [search, setSearch] = useState('');
    const onChangeSearch = (event)=>{
        setSearch(event.target.value);
    }
    const getSearchResult = ()=>{
        return search === '' 
        ? toDos
        : toDos.filter((element)=>element.content.toLowerCase().includes(search));
    }

    return(
        <div className='toDoList'>
            <h4>할 일 🌱</h4>
            <input
            className='searchBar' 
            placeholder='Search... ' 
            value={search}
            onChange={onChangeSearch}
            />
            <div className='list_wrapper'>
                {getSearchResult().map((element)=>
                (<TodoItem key={element.id} {...element} onUpdate={onUpdate} onDelete={onDelete}
                />
                ))
                }
                {/* {toDos.map((element)=>(
                    <TodoItem key={element.id}{...element}/>
                    ))} */}
                {/* <TodoItem/>
                <TodoItem/>
                <TodoItem/> */}
            </div>
        </div>
    )
}



export default TodoList;