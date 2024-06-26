import { set } from 'firebase/database'
import React, { useState } from 'react'

function Bollywood() {
    const movies = ["Welcome","Dhmaal","Hera-pheri","Race","Run"]
    const[picture,setpicture] = useState([])
    const[attempt,setAttempt] = useState(9)
    const start = ()=>{
        const randomNum = Math.floor(Math.random()*9)
        const picture = movies[randomNum]?.toLowerCase().split("");      
         setpicture(picture)
    }
    const[correctLetter,setCorrectLetter] = useState([])
    const[incorrectLetter,setInCorrect] = useState([])
    const[letter,setLetter] = useState("")

    const check = ()=>{
        if(picture.includes(letter.toLowerCase())){
            setCorrectLetter([...correctLetter,letter.toLowerCase()])
            setLetter("")
        }else{
            setInCorrect([...incorrectLetter,letter.toLowerCase()])
            setLetter('')
            setAttempt(attempt-1)
        }
    }
  return (
    <div className='w-[100%] h-[100vh] flex flex-col gap-5 items-center justify-center'>
        {/* {JSON.stringify(picture)} */}
       
        <div className='flex gap-5 '>
        {picture?.map((i)=>
        <div className='w-10 border-b-2 border-black flex items-center justify-center '>{correctLetter.includes(i) && i}</div>)}
        </div>
        {JSON.stringify(correctLetter)}
        {JSON.stringify(incorrectLetter)}
        <div>Attempt : {attempt}</div>
        <button onClick={()=>start()} className='h-[10vh] w-[20%] border font-semibold'>Start - Game</button>
        <div className='flex gap-5 w-[50%] items-center justify-center'>
        <input value={letter} onChange={(e)=>setLetter(e.target.value)}  className='h-[10vh] w-[50%] border pl-2 text-black' placeholder='Enter Letter'></input>
        <button onClick={()=>check()} className='h-[10vh] w-[15%] border font-semibold '>Add</button>
        </div>

    </div>
  )
}

export default Bollywood