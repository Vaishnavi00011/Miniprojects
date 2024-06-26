import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div className='flex  gap-5 text-[14px] flex-wrap'>
        <button className='h-[30px] w-[80px] border border-black flex items-center justify-center' onClick={()=> navigate('/calci') }>Calculator</button>
        <button className='h-[30px] w-[80px] border border-black flex items-center justify-center' onClick={()=>navigate('/practice')}>Practice</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/Tic-Tac-Toe')}>Tic-Tac-Toe</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/snakeladder')}>SnakeLadder</button>
        <button className='h-[30px] w-[80px] border border-black flex items-center justify-center' onClick={()=> navigate('/practice1')}>Practice1</button>
        <button className='h-[30px] w-[60px] border border-black flex items-center justify-center' onClick={()=> navigate('/laser')}>Laser</button>
        <button className='h-[30px] w-[60px] border border-black flex items-center justify-center' onClick={()=> navigate('/todo')}>Todo</button>
        <button className='h-[30px] w-[80px] border border-black flex items-center justify-center' onClick={()=> navigate('/toprectice')}>Toprectice</button>
        <button className='h-[30px] w-[60px] border border-black flex items-center justify-center' onClick={()=> navigate('/clock')}>Clock</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/clockprectice')}>Clockprectice</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/todo-backend')}>Todo Backend</button>
        <button className='h-[30px] w-[150px] border border-black flex items-center justify-center' onClick={()=> navigate('/movie-ticket')}>Movie Ticket Booking</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/bar')}>bar</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/ImageUpload')}>Image Upload</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/List')}>Image Upload</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/kbc')}>KBC</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/bollywood')}>Bollywood</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/google-map')}>Google-map</button>
        <button className='h-[30px] w-[90px] border border-black flex items-center justify-center' onClick={()=> navigate('/gas-number')}>Gas-Number</button>
        <button className='h-[30px] w-[150px] border border-black flex items-center justify-center' onClick={()=> navigate('/password')}>Password-generator</button>
        <button className='h-[30px] w-[150px] border border-black flex items-center justify-center' onClick={()=> navigate('/student')}>Student-List</button>
        <button className='h-[30px] w-[150px] border border-black flex items-center justify-center' onClick={()=> navigate('/function')}>Function</button>
    </div>
  )
}

export default Home