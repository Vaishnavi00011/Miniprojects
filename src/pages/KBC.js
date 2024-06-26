import axios from 'axios'
import React, { useEffect, useState } from 'react'

function KBC() {
    const[timer,setTimer] = useState(30)
    useEffect(()=>{
        if (timer>0){
            const interval = setInterval(()=>{
                setTimer((prev)=>prev - 1)
              }, 1000)
        
              return ()=> clearInterval(interval)
        }
      

    },[timer])
    
    useEffect(()=>{getData()},[])
    const[quetions,setQuetions] = useState("")
    const[optionA,setOptionA] = useState("")
    const[optionB,setOptionB] = useState("")
    const[optionC,setOptionC] = useState("")
    const[optionD,setOptionD] = useState("")
    const[answer,setAnswer] = useState("")
    const[showData,setShowData] = useState([])

    const[check1,setCheck1] = useState(0)
    const[check2,setCheck2] = useState(0)
    const[check3,setCheck3] = useState(0)
    const[check4,setCheck4] = useState(0)
  

    const postData = ()=>{
        const kbcobj = {
        Questions : quetions,
        OptionA : optionA,
        OptionB : optionB,
        OptionC : optionC,
        OptionD : optionD,
        Answer : answer
       }
       axios.post("http://localhost:5001/api/kbc", kbcobj).then((res)=>alert("successfully"))
    }
    
    const[showQue,setShowQue] = useState(0)
    const getData = ()=>{
        axios.get("http://localhost:5001/api/kbc").then((res)=>setShowData(res.data.data))
    }
    console.log(showData)

    
    const priceList = new Array(10).fill(1)
    for (let index in priceList){
        if (index==0){
            priceList[index] = 10000
        }
        else{
            priceList[index] = priceList[index -1]*2
        } 
    }
  return (
    <div className='w-[100%] h-[100vh] flex flex-col items-center justify-center bg-purple-900'>
        {JSON.stringify(priceList)}
        {/* <input onChange={(e)=>setQuetions(e.target.value)} className='border h-[5vh] w-[10%]'></input>
        <input onChange={(e)=>setOptionA(e.target.value)} className='border h-[5vh] w-[10%]'></input>
        <input onChange={(e)=>setOptionB(e.target.value)} className='border h-[5vh] w-[10%]'></input>
        <input onChange={(e)=>setOptionC(e.target.value)} className='border h-[5vh] w-[10%]'></input>
        <input onChange={(e)=>setOptionD(e.target.value)} className='border h-[5vh] w-[10%]'></input>
        <input onChange={(e)=>setAnswer(e.target.value)} className='border h-[5vh] w-[10%]'></input>
        <button onClick={()=>postData()} className='w-[10%] border h-[5vh] bg-slate-500'></button> */}
       <div className='flex w-[100%] h-[80vh] items-center justify-center pt-5 '>
       <div className='w-[20%] h-[60vh]  flex flex-col items-center justify-center gap-5'>
        <img className='w-[250px] h-[150px]' src='https://1.bp.blogspot.com/-FdfxthJYzUY/YEdY2a40GxI/AAAAAAAAAaA/O_0fYuO2m5krp2sJNG_H5CjQPW8i18-eACLcBGAsYHQ/s1200/KBC.png'></img>
        <div className='w-[150px] h-[150px] flex items-center justify-center border bg-purple-500 rounded-full text-[25px] font-semibold'>{`00 : ${timer}`}</div>
       </div>
        <div className='w-[50%] h-[60vh] flex justify-center  '>
            <img className='w-[90%] h-[60vh] rounded-xl' src='https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/09/09/Pictures/_6f2d13e6-f28a-11ea-8bce-519453830254.jpg'></img>
            </div>
           
            <div className='w-[25%] h-[60vh] flex flex-col-reverse justify-evenly items-center  bg-purple-500 rounded-xl'>
            {priceList.map((i)=>
            
                <label  className='text-[20px]'>{i.toLocaleString()}</label>)}
                </div>
            </div>

       {showData.map((i,index)=>{
        if(index===showQue){
          return(  
         <div className='w-[70%] h-[50vh] flex items-center justify-center flex-col gap-5'>
        
         
            <div className='w-[80%] rounded-2xl h-[10vh] border flex items-center justify-center bg-blue-950 text-white'>
                <p>{i.Questions}</p>
            </div>
            {/* {JSON.stringify(showData)} */}
            <div className='w-[80%] flex flex-wrap gap-2'>
                <div style={{backgroundColor: check1 == 1 ?"green" : check1==2 ? "red" :null}} onClick={()=>{
                    if(i.OptionA == i.Answer){
                        setCheck1(1)
                        setTimeout(()=>{setShowQue(showQue+1);setCheck1(0)},2000)
                    }else{
                        setCheck1(2)
                    }
                }
                } className='w-[49%] h-[7vh] border rounded-xl px-4 bg-blue-950 flex items-center text-white'>A. {i.OptionA}</div>

                <div style={{backgroundColor : check2 == 1 ? "green" : check2 == 2 ? "red" : null}} onClick={()=>{
                    if(i.OptionB == i.Answer){
                        setCheck2(1)
                        setTimeout(()=>{setShowQue(showQue+1);setCheck2(0)}, 2000)
                    }else{
                        setCheck2(2)
                    }
                }

                } className='w-[49%] h-[7vh] border rounded-xl px-4 bg-blue-950 flex items-center text-white'>B. {i.OptionB}</div>

                <div style={{backgroundColor : check3 == 1 ? "green" : check3 == 2 ? "red" : null }}
                 onClick={()=>{
                    if(i.OptionC == i.Answer){
                        setCheck3(1)
                        setTimeout(()=>{setShowQue(showQue+1);setCheck3(0)},2000)
                    }
                }} className='w-[49%] h-[7vh] border rounded-xl px-4 bg-blue-950 flex items-center text-white'>C. {i.OptionC}</div>

                <div style={{backgroundColor : check4 == 1 ? "green" : check4 == 2 ? "red" : null}} onClick={()=>{
                    if(i.OptionD == i.Answer){
                        setCheck4(1)
                        setTimeout(()=>{setShowQue(showQue+1)},2000)
                    }else{
                        setCheck4(2)
                    }
                }} className='w-[49%] h-[7vh] border rounded-xl px-4 bg-blue-950 flex items-center text-white'>D. {i.OptionD}</div>

            </div>
        </div>);}})}
        

      


    </div>
  )
}

export default KBC