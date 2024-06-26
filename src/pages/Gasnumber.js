import React, { useState } from 'react'

function Gasnumber() {

    const[number,setNumber] = useState("")
    const chooseNum = ()=>{
      const randomNum = Math.floor(Math.random()*100)
        setNumber(randomNum)
    }
    const[givenNum,setGivenNum]=useState("")
    const [attempt,setAttempt] = useState(4)
    const enterNum = (e)=>{
        if(number==givenNum){
            alert("you won")
        }else if(number<givenNum){
            alert("greater")
            setAttempt(attempt-1)

        }else{
            alert("less")
            setAttempt(attempt-1)
        }
    }
    

  return (
    <div  className='w-[100%] h-[100vh] flex items-center justify-center flex-col gap-4'>

        {/* {JSON.stringify(number)} */}
        {number==""?
        <button onClick={()=>chooseNum()} className='w-[200px] h-[50px] border border-black '>choose-number</button>:

        <div className='w-[100%] h-[8vh] flex items-center justify-center gap-2'>
            <input onChange={(e)=>setGivenNum(e.target.value)} className='w-[20%] h-[7vh] border border-black pl-2' placeholder='Enter Number'></input>
            <button onClick={()=>enterNum()} className='w-[20%] h-[7vh] border border-red-600'>Submit</button>
        </div>}
        <div>Attempt : {attempt}</div>
    </div>
  )
}

export default Gasnumber