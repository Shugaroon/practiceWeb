import '../css/TodoItem.css'


const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {

    const onChangeCheckbox = () =>{
        onUpdate(id);
    };

    const onClickDelete = ()=>{
        onDelete(id);
    }

    // const onClickEdit = ()=>{
    //     onEdit(id);
    // }

    return (
        <div className='toDoItem'>
            <div className='checkbox_col'>
                <input checked={isDone} type='checkbox' onChange={onChangeCheckbox}/>
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                {/* <button onClick={onClickEdit} className='editBtn'>수정</button> */}
                <button onClick={onClickDelete} className='deleteBtn'>삭제</button>
            </div>
        </div>
    )
}





export default TodoItem; 