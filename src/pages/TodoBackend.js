import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TodoBackend() {
    useEffect(()=>{getData()},[]);
    
    const [task, setTask] = useState("")
    const postData = () => {
        const item = {
            task: task,
        }
        axios.post('http://localhost:5001/api/todo' , item).then(()=>{alert("Done");setTask("");getData()})
}
const [taskList,setTaskList] = useState([])
  const getData=()=>{
    axios.get('http://localhost:5001/api/todo').then((res)=> setTaskList(res.data.data))
  }

  const deleteFn= (x)=>{
    axios.delete('http://localhost:5001/api/todo/'+x).then(()=>getData())
  }
   const[id ,setId]=useState("")
  const updateFn=()=>{
    const item = {
        task : task
    }
    axios.put('http://localhost:5001/api/todo/'+id,item).then(()=>{getData();setId("");setTask("");})
  }
    
    
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center flex-col gap-4'>
        <div className='flex gap-4'>
        <input value={task} onChange={(e)=>setTask(e.target.value)} className='w-[200px] h-[50px] border-2 border-black outline-none' placeholder='Task'></input>
        {id==""?(
        <button onClick={()=>postData()} className='w-[100px] h-[50px] border border-black'>Submit</button>)
         :(
        <button onClick={()=>updateFn()} className='w-[100px] h-[50px] border border-black'>{""} Update{""}</button>)}
        </div>
        <div>
            <table>
                <thead>
                    <th>S no.</th>
                    <th>Task </th>
                    <th>Action</th>
                    <th>Update</th>
                </thead>
                <tbody>
                    {taskList.map((i,index)=>                    
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.task}</td>
                        <td onClick={()=>deleteFn(i._id)}>Delete</td>
                        <td onClick={()=>{setTask(i.task);setId(i._id);}}>Edit</td>
                    </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TodoBackend