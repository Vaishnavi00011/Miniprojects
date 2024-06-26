import React, { useState } from 'react'

function Bar() {
    const[bar , setBar] = useState(0)
    const moveBar = ()=>{
        if(bar == 1){
            setBar(0)
        }else{
            setBar(1)
        }
    }
    
  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh]'>
        
            <div onClick={()=>moveBar()}
             style={{}} className={`hambar ${bar==1 ? 'cross' : 'hambar'}`}>
                <div style={{opacity: bar==0 ? 1 : 0}} className='middle h-[3px] w-[20px] bg-orange-400'></div>

            </div>

        
    </div>
  )
}

export default Bar