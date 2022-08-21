import { useState } from "react";

function App(){

    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    

    const [jobs,setJobs] = useState(storageJobs ?? []) // toán tử ?? để kiểm tra storageJobs có trả về NULL hay UNdefile hay không nếu đúng sẽ trả về []
    const [job,setJob] = useState('')

    console.log(job)

    const handleSubmit = () =>{
        setJobs( pre => {
        if(!jobs.includes(job)){
            const newJobs = [...pre,job]
            // save to local storage 
            const jsonJob = JSON.stringify(newJobs)
            localStorage.setItem('jobs',jsonJob)

            // cai lai input = rong
            setJob('')
            // return ra mang jobs 
            return newJobs
        }else{
            const newJobs = [...pre]
            // save to local storage 
            const jsonJob = JSON.stringify(newJobs)
            localStorage.setItem('jobs',jsonJob)

            // cai lai input = rong
            setJob('')
            // return ra mang jobs 
            return newJobs
        }
        })
    }
    console.log(jobs)
    return(
        <div>
            <input placeholder="somthing" style={{marginLeft: 25}}
                value = {job}
                onChange = {e=>setJob(e.target.value)}
            />
            <button style={{marginLeft:25,marginTop: 15}}
                onClick = {handleSubmit}
            >
                Add
            </button>
            <ul>
                {jobs.map((jb,index)=>(
                    <li key={index}>{jb}</li>
                ))}
            </ul>
        </div>
 
    )
}

export default App;