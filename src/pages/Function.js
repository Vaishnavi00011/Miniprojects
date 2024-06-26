import React from 'react'

function Function() {

    // -------------------------fibonacci fn------------------------

//     let a=0
//     let b=1
//     let c
//     console.log(a)
//     console.log(b)
//     const fibonnaciFn = ()=>{
//     for(let i=0;i<10;i++){
//         c = a+b
//         a=b
//         b=c
//         console.log(c)
//     }
// }
// fibonnaciFn()

// ----------or-------------

//  let list = [0,1]
//  const fibonacciFn = ()=>{
//     for (let i=0 ; i<10 ; i++){
//          list.push(list[i] + list[i+1])
//     }
//     console.log(list)
//  }
//  fibonacciFn()

// ------------or--------------

// let list = new Array(10).fill(0)
// const fibonacciFn = ()=>{
//     for(let i in list){
//         if(i<=1){
//             list[i] = +i
//         }else{
//             list[i] = list[i-2] + list[i-1]
//         }
//     }
//     console.log(list)
// }
// fibonacciFn()

// ---------------------------------palindrom No.----------------------

// let a = "nit"
// let b = a.split("").reverse().join("")
// console.log (b)
// const palindromFn = ()=>{
//     if(a.toLowerCase() === b.toLowerCase()){
        // console.log("Palindrom no.")
//     }else{
//         console.log("Not palindrom no.")

//     }
// }
// palindromFn()

// ------------or-----------

// let a = "Kanak"
// let reverse = ""
// const palindromFn = ()=>{
//     for(let i of a){
//         reverse = i + reverse
//     }
//     if(a.toLowerCase() == reverse.toLowerCase()){
//         console.log("Palindrom no.")
//     }else{
//         console.log("Not Palindrom no.")
//     }
// }
// palindromFn()

// -----------or------------

// let a = "naman"
// let b = ""
// const palindromFn = ()=>{
//     for(let i=0;i<a.length;i++){
//         b = a[i] + b
//     }
//     if(a.toLowerCase() == b.toLowerCase()){
//         console.log("Palindrom")
//     }else{
//         console.log("Not palindrom")
//     }
// }
// palindromFn()

// --------------------------------remove i ----------------------------

// let list = ["Dipika","Vaishnavi","kunal"]

// const newListFn = ()=>{
//     for (let i in list){
//       let result = list[i].split("i").join("")
//       console.log(result)
//     }
    
// }
// newListFn()

// --------------------------------pattern fn-------------------------

// let a = "vaishnavi"
// let b = 1
// const patternFn = ()=>{
//     for(let i of a){
//       console.log(i.repeat(b))
//       b++
//     }
// }
// patternFn()

// --------------------------------------factors-fn-------------------

// let a = 124
// let result = []
// const factorsFn = ()=>{
//     for(let i=0;i<124;i++){
//         if(a%i===0){
//            result.push(i)
//         }
//     }
//     console.log(result)

// }
// factorsFn()

// -----------------------------convert single list-----------------------------

// let list = [[1,2,3,4,5], [6,7,8,9]]
// let result = []
// const listFn  = ()=>{
//     for(let i of list){
//         result.push(...i)
//     }
//     console.log(result)

// }
// listFn()

// ---------------------------------------lowercase to uppercase ------------------
let a = "DiVyA"
let result = ""
const caseFn = ()=>{
    for(let i of a){
        if(i.toLowerCase() == i){
            result = result + i.toUpperCase()
           }else{
             result = result + i.toLowerCase()
           }
           }
           console.log(result)
           
    }
    caseFn()
    



  return (
    <div>

    </div>
  )
}

export default Function