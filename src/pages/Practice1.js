import React, { useState } from 'react'
import Practice1css from './Practice1.css'


function Practice1() {

  // const [value, setValue] = useState(false)

  //   return (
  //   <div className='button-div'>
  //     <div style={value?{"border-radius":"0px"}:{"border-radius":"50%"}} id='p100'></div>
  //     <button onClick={()=>setValue(value?false:true)}>click me</button>

  // let a="Anshul Baghel"

  // let x = a.indexOf("")
  
  // console.log(x);





// -------------------------------length task----------------------------

// let name = "Vaishnavi patil"

// let x = name.length
// // let y = name.indexOf(" ")

// // let z = x-y;

// // console.log(z-1);

// console.log(x);


// -------------------------------maximum two number--------------------

// let a=10;
// let b=5;
// if(a>b){
//   alert("a is maximum No.")
// }else{
//   alert("b is not maximum No.")
// }
// ----------------------------------maximum three number--------------------
// let a = 30;
// let b = 20;
// let c = 10;
// if(a>b && a>c){
//   alert("a is maximum")
// }else if(b>a && b>c){
//   alert("b is maximum")
// }
// else{
//   alert("c is maximum")
// }



// let number = +prompt("Enter your number")

// if(number%5==0 && number%11==0){
//   alert("number divisible both 5 or 11")
// }else{
//   alert(" number not a divisible both")
// }


// ------------------------------npz program--------------------

// let number = +prompt("enter your number")
// if(number<0){
//   alert("Nagative number ")

// }else if(number>0){
//   alert("Positive number")
// }
// else{
//   alert("Zero")
// }

// ---------------------------odd-even--------------------------------

// let number = +prompt("Enter Your Number")
// if(number%2==0){
//   alert("even number")
// }else{
//   alert("odd number")
// }

// ------------------------------leap year or not---------------------------

// let year = +prompt("Enter Your Number")
// if(year%4==0){
//   alert("leap year")
// }else{
//   alert("not a leap year")
// }
// ------------------------------alphabets-------------------------------

// let ch = +prompt("Enter Your chrachter")
// if(ch>=65 && ch<=90){
//   alert("alphabets")
// } 
// else{
//   alert("not alphabets")
// }

// ---------------------------------vowel-consonant--------------------------

// let ch = prompt("enter the character")
// if(ch=="i" || ch=="I" || ch=="e" || ch=="E" || ch=="o" || ch=="O" || ch=="u" || ch=="U"||ch=="a"||ch=="A"){
//   alert("vowel")
// }else{
//   alert("consonant")
// }

// --------------------------------duplicate-number---------------------------------
// const a = [1,4,6,5,3,4,6]

// let repeat = []
// let NonRepeated = []

// for(let i of a){
//   if (NonRepeated.includes(i)){
//     repeat.push(i)
//   }
//   else{
//      NonRepeated.push(i)
//   }
// }

// alert(repeat)

// ------------------------------------or------------------------------------

// const list = [1,2,4,5,8,2,9,5]
// const duplicateNum = list.filter((i,index)=>!( index == list.indexOf(i)))
// alert(duplicateNum)
 

// ----------------------------------reverse-number----------------------------

// let number = 123456
// let result = 0
// const reverseNum = () => {
//   for(let i=0; i<6; i++){
//     let lastNum = number%10;
//     result = result*10 + lastNum
//     number = Math.trunc(number/10)
//     }
//   return result
// }

// -----------------------------------prime-number----------------------------

// const number = +prompt("Enter a Number")
// for(let i=2;i<number;i++){
//   if(number%i === 0){
//     alert("not  prime number")
//     break;
//   }else if(i==(number-1)){
//     alert("prime number")
//   }
// }

// let a = " "
// for(let i=0;i<5;i++){
//   a = a + "* "

//  console.log(a)
// }


// let a = "*****"
// for(let i=5;i>0; i--){

//   a = a.slice(0,i-1)
//   console.log(a)

// }

// let a = "     "
// for(let i=5;i>0;i--){
//   a=a.slice(1) + "*"
//   console.log(a)
// }

// let a = "     "
// for(let i=5;i>0;i--){
//   a=a.slice(1) + " *"
//   console.log(a)
// }

// -----------------------------fibonacci - sirise------------------------------

// let a=0
// let b=1
// let c
// console.log(a)
// console.log(b)
// for(let i=0;i<10;i++){
//   c=a+b
//   a=b
//   b=c
//   console.log(c)
// }

// -------or-------

// let list = [0,1]
// for(let i=0;i<6;i++){
//   list.push(list[i] + list[i+1])
// }
// console.log(list)

// ---------------or-----------

// let a = new Array(8).fill(0)
// for(let i in a){
//   if(i<=1){
//     a[i] = +i
//   }else{
//     a[i] = a[i-2] + a[i-1]
//   }
//   console.log(a)

// } 

// ----------------------------------palindrom-No.-------------------------------

// let a = "Kanak  "
// let b = a.split("").reverse().join("")
// console.log(b)
// if(a.toLowerCase()===b.toLowerCase()){
//   console.log("palindrom")
// }else{
//   console.log("not palindrom")
// }

// ---------or--------

// let a = "nitin"
// let reverse = ""
// for(let i of a){
//   reverse = i + reverse
// }
// if(a.toLowerCase() === reverse.toLowerCase()){
//   console.log("palindrom")
// }else{
//   console.log("not palindrom");
// }

// ----------or-----------

// let a = "nitin"
// let reverse = ""
// for(let i=0;i<a.length;i++){
//   reverse = a[i] + reverse
// }
// if(a.toLowerCase() == reverse.toLowerCase()){
//     console.log("palindrom")
//   }else{
//     console.log("not palindrom");
//   }
  
// ----------------------remove i------------------------------

// let list = ["Dipika","Vaishnavi" ,"Kunal"]
// for(let i in list){
//   let x = list[i].split("i").join("")
//   console.log(x)
// }

// -----------------------pattern---------------------------
// let a = "coding"
// let x = 1
// for(let i of a){
// //  console.log(i)
//  console.log(i.repeat(x))
//  x++
  // }

// -----------------------------convert single list-----------------
// let a = [[11,22,33,44],[21,22,23,24]]
// let result = []
// for(let i of a){
//    result.push(...i)
//   console.log(result)
// }

// ---------------------------------divided 124-----------------------------
// let a = 124
// let list = []
// const numfn = ()=>{
//   for (let i=1; i<124 ;i++){
//     if(a%i===0){
//       list.push(i)
//     }
    
//   }
  // console.log(list)

// }
// numfn()

// ----------------------------------lower to upper and upper to lower-------------------

// let name = "VaiShnavI"
// let result = " "
// for (let i of name){
// if(i.toLowerCase() == i){
//  result = result + i.toUpperCase()
// }else{
//   result = result + i.toLowerCase()
// }
// }
// console.log(result)

// ---------------------------------------max No.---------------------------

// let a = [11,22,33,44,55,8]
// let b = 0
// for(let i of a){
//   if(i>b){
//     b = i
//   }
// }
// console.log(b)


let list = [[22,33,4],[8,89,79],[12,8,17]]
let newList = []
let num = 0  
for(let i of list){
  newList.push(...i)
  for(let j of newList)
  if(j>num){
    num = j
  }
  
}
console.log(num)




return(
  <div>

  </div>
)

  
}

export default Practice1