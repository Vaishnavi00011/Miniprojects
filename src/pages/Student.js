import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Student() {
    useEffect(()=>{getDataFn()},[])

    const[studentObj,setStudentObj] = useState("")
    const[id,setId] = useState("")
    const postFn = ()=>{
        axios.post("http://localhost:5001/api/student",studentObj).then((res)=> {alert("successfully");
            setStudentObj({name:"", gender:"" , mobile:""})
            getDataFn()
        })

    }
    const[studentList,setStudentList] = useState([])
    const getDataFn = ()=>{
        axios.get("http://localhost:5001/api/student").then((res)=> setStudentList(res.data.data))
    }

    const deletFn = (id)=>{
        axios.delete("http://localhost:5001/api/student/"+id).then(()=>{alert("deleted succssefully");
            getDataFn()
        })
    }

    const updateFn = ()=>{
        axios.put("http://localhost:5001/api/student/"+id, studentObj).then(()=>{alert("update succssefully"); getDataFn()})
    }

    
  return (
    <div className='w-[100%] h-[100vh] flex flex-col gap-5 pt-10 px-4'>
        <div className='w-[100%] flex  gap-4'>
        <input value={studentObj?.name} onChange={(e)=>setStudentObj({...studentObj,name:e.target.value})}

         className='w-[200px] h-[40px] border outline-none border-black pl-2' placeholder='name'></input>
        <div className='flex h-[7vh] gap-3'>
        <div className='flex items-center justify-center gap-2'>
        <input value={studentObj?.gender} onChange={(e)=>setStudentObj({...studentObj,gender: "Male"})} name='gender' className='w-[px] h-[px] border  ' type='radio'></input>
        <label>Male</label>
        </div>
        <div className='flex items-center justify-center gap-2'>
        <input value={studentObj?.gender} onChange={(e)=>setStudentObj({...studentObj,gender: "Female"})} name='gender' className='w-[px] h-[px] border  ' type='radio' placeholder='Female'></input>
        <label>Female</label>
        </div>
        </div>
        <input value={studentObj?.mobile} onChange={(e)=>setStudentObj({...studentObj,mobile: e.target.value})} className='w-[200px] h-[40px] border outline-none border-black pl-2' placeholder='mobile'></input>
         {id==""?
        <button onClick={()=>postFn()} className='w-[150px] h-[40px] bg-black text-white'>Submit</button>:
        <button onClick={()=>updateFn()} className='w-[150px] h-[40px] bg-black text-white'>update</button>}
        {JSON.stringify(studentObj)}
        </div>

        <div>
            <table>
                <thead className='flex gap-2'>
                    <th>S no.</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Mobile NO.</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {studentList.map((i,index)=>
                    <tr className='flex gap-4'>
                        <td>{index+1}.</td>
                        <td>{i.name}</td>
                        <td>{i.gender}</td>
                        <td>{i.mobile}</td>
                        <td className='flex items-center justify-center gap-2'>
                        <button onClick={()=>{
                            setStudentObj({name:i.name, mobile: i.mobile, gender: i.gender })
                            setId(i._id)
                        }} className='w-[60px] h-[30px] bg-black text-white'>Edit</button>
                        <button
                        onClick={()=>deletFn(i._id)
                        }
                        
                        
                        className='w-[60px] h-[30px] bg-black text-white'>delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Student