const courses = [
    {
    "id" : "1",
    "title" : "learn React",
    "image" : "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
    "student" : 100000,
    "description" : "this courses is very good for beginner"
    },
    {
    "id" : "2",
    "title" : "learn HTML",
    "image" : "https://inekeyuliam.github.io/images/html.png",
    "student" : 1000001,
    "description" : "this courses is very good for beginner"
    },
    {
    "id" : "3",
    "title" : "learn CSS",
    "image" : "https://funix.edu.vn/wp-content/uploads/2021/12/m%C6%B0%CC%81c-%C4%91%C3%B4%CC%A3-%C6%B0u-ti%C3%AAn-khi-a%CC%81p-du%CC%A3ng-nhi%C3%AA%CC%80u-CSS-1.jpg",
    "student" : 1000002,
    "description" : "this courses is very good for beginner"
    }
    
]


//  kiểu basic
// array function
// const PostItem = props => (
//     <div>
//         <h1 onClick={()=>(console.log(props.title))}>{props.title}</h1>
//         <img src={props.img}></img>
//         <h2>{props.title}</h2>
//         <p>{props.description}</p>
//         <p>{props.student}</p>
//     </div>
// )

// function App(){
//     return(
//         <div id="wrapper" >
//             {courses.map(course =>(
//                 <PostItem
//                     key = {course.id}
//                     title = {course.title}
//                     description = {course.description}
//                     student = {course.student}
//                     img = {course.image}
                    
//                 />
//             ))}
//         </div>
//     )
// }


// Kiểu tranformer
const PostItem = ({props,onClick}) => (
    <div>
        <h1 onClick ={()=>onClick(props.title)}>{props.title}</h1>
        <img src={props.image}></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.student}</p>
    </div>
)

function App(){

    const handleClick = (x) =>{
        console.log(x)
    }

    return(
        <div id="wrapper" >
            {courses.map(course =>(
                <PostItem
                    key = {course.id}
                    props = {course}  // sử dụng tranformer để ko gán lại các prop 
                    onClick = {handleClick}
                />
            ))}
        </div>
    )
}
    
ReactDOM.render(<App/>,document.getElementById('root'))   
