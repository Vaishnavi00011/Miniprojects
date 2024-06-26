import React, { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [eIndex, setEIndex] = useState("")

  return (
    <div>
      <div>
        {task}
        {JSON.stringify(todoList)}
      </div>
      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-black"
          placeholder="Task"
        ></input>
        <button
          onClick={() => {
            setTodoList([task, ...todoList]);
            setTask("");
          }}
        >
          Submit
        </button>
        <button
          onClick={()=>{
            todoList[eIndex] = task
            setTodoList([...todoList])
            // setTodoList([...todoList.filter((i, index)=> index != eIndex), task])

          }}
        >
          Update
        </button>
      </div>
      <table>
        <thead>
          <th>S no</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {todoList.map((i, index)=>
          <tr>
            <td>{index +1}</td>
            <td>{i}</td>
            <td onClick={()=>setTodoList(todoList.filter((j)=> i!=j))}>Delete</td>
            <td onClick={()=>{
              setTask(i);
              setEIndex(index)
            }}>Edit</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
