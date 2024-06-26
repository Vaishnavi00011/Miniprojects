import React, { useState } from 'react'
import TicTacToecss from "./TicTacToe.css";


function TicTacToe(){

  const[p1,setP1] = useState("")
  const[p2,setP2] = useState("")
  const[p3,setP3] = useState("")
  const[p4,setP4] = useState("")
  const[p5,setP5] = useState("")
  const[p6,setP6] = useState("")
  const[p7,setP7] = useState("")
  const[p8,setP8] = useState("")
  const[p9,setP9] = useState("")
  const[turn,setTurn] = useState(1)
  const chaalP1 =()=>{
    if(turn==1 & p1==""){
      setP1("X")
      setTurn(2)
    }
    else if(turn==2 & p1==""){
      setP1("O")
      setTurn(1)
      
    }
  }  
    const chaalP2 =()=>{
      if(turn==1 & p2==""){
        setP2("X")
        setTurn(2)
      }
      else if(turn==2 & p2==""){
        setP2("O")
        setTurn(1)
        
      }


  }
  const chaalP3 =()=>{
    if(turn==1 & p3==""){
      setP3("X")
      setTurn(2)
    }
    else if(turn==2 & p3==""){
      setP3("O")
      setTurn(1)
      
    }


}

const chaalP4 =()=>{
  if(turn==1 & p4==""){
    setP4("X")
    setTurn(2)
  }
  else if(turn==2 & p4==""){
    setP4("O")
    setTurn(1)
    
  }


}
const chaalP5 =()=>{
  if(turn==1 & p5==""){
    setP5("X")
    setTurn(2)
  }
  else if(turn==2 & p5==""){
    setP5("O")
    setTurn(1)
    
  }


}
const chaalP6 =()=>{
  if(turn==1 & p6==""){
    setP6("X")
    setTurn(2)
  }
  else if(turn==2 & p6==""){
    setP6("O")
    setTurn(1)
    
  }


}
const chaalP7 =()=>{
  if(turn==1 & p7==""){
    setP7("X")
    setTurn(2)
  }
  else if(turn==2 & p6==""){
    setP7("O")
    setTurn(1)
    
  }


}
const chaalP8 =()=>{
  if(turn==1 & p8==""){
    setP8("X")
    setTurn(2)
  }
  else if(turn==2 & p8==""){
    setP8("O")
    setTurn(1)
    
  }


}
const chaalP9 =()=>{
  if(turn==1 & p9==""){
    setP9("X")
    setTurn(2)
  }
  else if(turn==2 & p9==""){
    setP9("O")
    setTurn(1)
    
  }


}

  return (
    <div className='body'>
      {p1=="X" & p2=="X" & p3 =="X"? alert("Player 1 won"):null}
      {p1=="O" & p2=="O" & p3 =="O"? alert("Player 2 won"):null}
      {p1=="X" & p4=="X" & p7=="X" ? alert("player 1 won"):null}
      {p1=="O" & p4=="O" & p7=="O" ? alert("player 2 won"):null}
      {p4=="X" & p5=="X" & p6=="X" ? alert("player 1 won"):null}
      {p4=="O" & p5=="O" & p6=="O" ? alert("player 2 won"):null}
      {p2=="X" & p5=="X" & p8=="X" ? alert("player 1 won"):null}
      {p2=="O" & p5=="O" & p8=="O" ? alert("player 2 won"):null}
      {p7=="X" & p8=="X" & p9=="X" ? alert("player 1 won"):null}
      {p7=="O" & p8=="O" & p9=="O" ? alert("player 2 won"):null}
      {p3=="X" & p6=="X" & p9=="X" ? alert("player 1 won"):null}
      {p3=="O" & p6=="O" & p9=="O" ? alert("player 2 won"):null}
      {p1=="X" & p5=="X" & p9=="X" ? alert("player 1 won"):null}
      {p1=="O" & p5=="O" & p9=="O" ? alert("player 2 won"):null}
      {p3=="X" & p5=="X" & p7=="X" ? alert("player 1 won"):null}
      {p3=="O" & p5=="O" & p7=="O" ? alert("player 2 won"):null}
      <div className='container-1'>
        <div className='Button'>
        <button onClick={()=> chaalP1()} className='tic-1'>{p1}</button>
        <button onClick={()=> chaalP2()} className='tic-1'>{p2}</button>
        <button onClick={()=> chaalP3()} className='tic-1'>{p3}</button>
        </div>
        <div className='Button'>
        <button  onClick={()=> chaalP4()} className='tic-1'>{p4}</button>
        <button  onClick={()=> chaalP5()} className='tic-1'>{p5}</button>
        <button  onClick={()=> chaalP6()} className='tic-1'>{p6}</button>
        </div>
        <div className='Button'>
        <button  onClick={()=> chaalP7()} className='tic-1'>{p7}</button>
        <button  onClick={()=> chaalP8()} className='tic-1'>{p8}</button>
        <button  onClick={()=> chaalP9()} className='tic-1'>{p9}</button>
        </div>
        
      </div>

    </div>
  )
}

export default TicTacToe