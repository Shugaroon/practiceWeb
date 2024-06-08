import '../css/Header.css'

const Header = ()=>{
    return(
        <header className='header'>
            <h1>📅 {new Date().toDateString()}</h1>
        </header>
    )
}



export default Header;