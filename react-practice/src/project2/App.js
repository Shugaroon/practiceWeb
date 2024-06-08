import './App.css';
import Image1 from './component/Image1'
import Image2 from './component/Image2'
import Main from './component/Main'
import Aside from './component/Aside'

function App(){
    return(
        <div className='container'>
            <Image1/>
            <Image2/>
            <Main/>
            <Aside/>
        </div>
    )
}



export default App;