import '../css/TodoEditor.css'
import {useState, useRef} from 'react';

const TodoEditor = ({onCreate})=>{
    const [content, setContent] = useState('');
    const inputRef = useRef(); // 

    const onChangeContent = event =>{
        setContent(event.target.value);
    }
    
    const onSubmit = ()=>{
        if(!content){ // 인풋창에 콘텐츠가 비어있으면 inputRef의 현잿값 요소에 포커스하고 종료
            inputRef.current.focus();
            return;
        }
        onCreate(content)
        setContent('');
    }
   
    const onKeyDown = event=>{
        if (event.keyCode === 13){
            onSubmit();
        }
    }



    return(
        <div className='toDoEditor'>
            <h4>할 일 작성하기 ✏</h4>
            <div className='editor_wrapper'>
                <input
                placeholder='Should to do...'
                ref={inputRef} // inputRef는 현잿값으로 이 요소를 저장
                value={content}
                onChange={onChangeContent} // prop onChange로 안주면 input창 입력 불가
                onKeyDown={onKeyDown} // 키입력시 함수 호출
                autoFocus
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}


export default TodoEditor;