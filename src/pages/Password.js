import React, { useState } from 'react'

function Password() {
    const size = new Array(9).fill().map((i,index)=> index+8)
    let password = ""
    const[result,setResult] = useState("")

    const generatePass = (x)=>{
        let capital = ['A','B','C','D','E','F','G','H','I','J']
        let small = ['a','b','c','d','e','f','g','h','i','j']
        let number = [1,2,3,4,5,6,7,8,9,0]
        let symbol = ['!','@','#','$','%','^','&','*','=','_']
        const choose = [capital,small,number,symbol]

        for(let i=0 ; i<x ; i++){
            const randomNum = Math.floor(Math.random()*10)
            const chooseNum = Math.floor(Math.random()*4)
            password = password + choose[chooseNum][randomNum]
        }
        setResult(password)
    }
  return (
    <div className='w-[100%] h-[100vh] flex  flex-col pt-10 px-4 gap-8'>
        <div>
        {size.map((i)=>
        <button onClick={()=>generatePass(i)} className='w-[100px] h-[50px] border border-black font-bold'>{i}</button>)}
        </div>
        <label className='text-[20px] font-bold'>Password : {result}</label>

    </div>
  )
}

export default Password