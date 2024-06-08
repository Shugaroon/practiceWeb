



const Props = ({name, onChangeTitle, onSubmit})=>{
    return(
        <div className='container'>
            <input value={name} onChange={onChangeTitle}/>
            <button onClick={onSubmit}>greet~!</button>
            <h2>안녕하세요, {name}</h2>
        </div>
    )
}


export default Props;