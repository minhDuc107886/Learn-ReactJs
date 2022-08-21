import {useState} from 'react'
// vidu 1
// const gifts =[
//   'iphone 13 pro max',
//   'laptop dell i7 SSD',
//   'laptop hp i7 SSD'
// ]


// function App() {
//   const [gift,setGift] = useState()

//   const handleGetGift = () =>{
//     console.log(Math.floor(Math.random() * gifts.length))
//     setGift(gifts[Math.floor(Math.random() * gifts.length)])
//   }

//   return (
//     <div className="App" style={{padding: 32}}>
//       <h1>{gift || "chưa có phần thưởng"}</h1>
//       <button onClick={handleGetGift}>Lấy thưởng</button>
     
//     </div>
//   );
// }


// vidu2 // two way binding: dũ liệu thay đổi giao diện thay đổi theo
// function App() {
//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')

//   const handleSubmit=()=>{
//     console.log({
//       name,
//       email
//     })
//   }

//   return (
//     <div className="App">
//      <input
//       style={{display:'block', margin: 15}}
//       value={ name}// lấy giá trị trong form, ở đây value là prop để lưu dữ liệu
//       // => khi dũ liệu thay đổi giao diện thay đổi theo 
//        onChange={e=>setName(e.target.value)}// lấy giá trị dũ liệu trong form
//      />
//      <input
//       style={{display:'block', margin: 15}}
//       value={ email}// lấy giá trị trong form, ở đây value là prop để lưu dữ liệu
//        onChange={e=>setEmail(e.target.value)}// lấy giá trị dũ liệu trong form
//      />
//      <button onClick={handleSubmit} style={{display:'block', margin: 15}}> Submit</button>
//     </div>
//   );
// }



// vidu 3: get value from rario input

// Response from Api 
// const courses = [
//   {
//     id: '1',
//     name: 'Html,Css'
//   },
//   {
//     id: '2',
//     name: 'Javascript'
//   },
//   {
//     id: '3',
//     name: 'ReactJs'
//   },
// ]
// function App() {
//   const [checked,setChecked] = useState()
//   console.log(checked)

//   const handleSubmit=()=>{
//     // call Api
//    console.log({id : checked})
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//       {courses.map((course)=>(
//         <div key={course.id}>
//             <input
//               type="radio"
//               checked = {checked === course.id}
//               onChange={()=>setChecked(course.id)}
//             />
//             {course.name}
//         </div>
//       ))}
//      <button onClick={handleSubmit}> Submit</button>
//     </div>
//   );
// }



// vidu4: get value from checkbox
const courses = [
  {
    id: '1',
    name: 'Html,Css'
  },
  {
    id: '2',
    name: 'Javascript'
  },
  {
    id: '3',
    name: 'ReactJs'
  },
]

function App() {
  const [checked,setChecked] = useState([])
  console.log(checked)

  const handleCheck=(id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked){
          // uncheck
          return checked.filter(item => item  !== id)
      }else{
        return [...prev,id]
      }
    })
  }

  const handleSubmit=()=>{
    // call Api
   console.log({id : checked})
  }

  return (
    <div className="App" style={{padding: 20}}>
      {courses.map((course)=>(
        <div key={course.id}>
            <input
              type="checkbox"
              checked = {checked.includes(course.id)}
              onChange={()=>handleCheck(course.id)}
            />
            {course.name}
        </div>
      ))}
     <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default App;
