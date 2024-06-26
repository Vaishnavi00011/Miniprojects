import React from 'react'

function Clock() {
  const currDate = new Date()
  const hour = currDate.getHours()
  const minute = currDate.getMinutes()
  const second = currDate.getSeconds()

  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
        {hour} : {minute}
        <div className='border border-black relative w-[400px] h-[400px] rounded-full flex items-center justify-center'>
            <div className='w-[5px] h-[5px] bg-black rounded-full'></div>
            <div style={{transform: `rotate(${6*minute}deg)`, transformOrigin: 'bottom'}} className='w-[5px] h-[180px] bg-red-400  absolute bottom-[50%]'></div>
            <div style={{transform: `rotate(${30*hour}deg)`, transformOrigin: 'bottom'}} className='w-[5px] h-[100px] bg-blue-400 absolute bottom-[50%]'></div>
            <div style={{transform: `rotate(${6*second}deg)`, transformOrigin: 'bottom'}} className='w-[3px] h-[190px] bg-orange-400 absolute bottom-[50%]'></div>
        </div>
    </div>
  )
}


export default Clock