import React, { useState } from 'react'

function Toprectice() {
   const [taskList,setTaskList]=useState([]);
   const[task, setTask]=useState("")

  return (

    <div>{task}
        <input onChange={(e)=> setTask(e.target.value)}  className=' w-[15%] h-[7vh] border-black border-2' placeholder='Task'></input>
        <button onClick={()=> setTaskList([...taskList, task])} className='w-[10%] h-[7vh] border-2 border-black'>Submit</button>
        <br></br>
        {JSON.stringify(taskList)}
    </div>
  )
}

export default Toprectice