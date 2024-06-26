import React, { useState } from "react";

function Todo() {
  const [list, setList] = useState(["Gymming"]);
  const [task, setTask] = useState("")
  return (
    <div>
      <div>
        <input onChange={(e)=> setTask(e.target.value)} placeholder="Task" className="border-black border-2 p-2"></input>
        <button onClick={()=> setList([...list, task])} className="border-2 border-black p-2">Submit</button>
      </div>
      <table>
        <thead>
          <th>S no</th>
          <th>Task</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {list.map((i, index) => (
            <tr>
              <td>{index+1}.</td>
              <td>{i}</td>
              <td onClick={()=> setList( list.filter((j)=> j != i ))}>x</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
