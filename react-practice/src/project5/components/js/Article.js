import '../css/Article.css';



const Article = (props)=>{
    return(
        <h1>{props.greeting}, {props.name}{props.title}</h1>
    )
}


export default Article;