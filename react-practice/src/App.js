import './App.css';

function Header(props){
  return(
    <header>
      <h1><a href='/' onClick={(event)=>{event.preventDefault(); props.onChangeMode()}}>{props.title}</a></h1>
    </header>
    
  )
}

function Article(props){
  return(
    <article>
      <p>this is {props.id} element.</p>
    </article>
  )
}

function Nav(props){
  const lis = []
  for(let i = 0; i < props.topics.length; i++){
      const t = props.topics[i]
      lis.push(<li key={t.id}><a href='#'>{t.title}</a></li>)
  }
  
  return(
    <ol>
      {lis}
    </ol>
  )
}

function App() {
  const topics = [
    {id:0, title:'html', body:'html is easy.' },
    {id:1, title:'css', body:'css is little bit difficult.'},
    {id:2, title:'javascript', body:'javascript is shit.'}
  ]
  return (
      <div className="all">
        <Header title="WEB" onChangeMode={function(){console.log('Header')}}/>
        <Nav topics={topics}/>
        <Article id="article"/>
        {/*
        <Container/>
        <Footer/> */}
      </div>
  );
}

export default App;
