//console.log("Hello Akshay .")
// console.log("I am the Best!!");
//

//


//const sum = (a,b)=> {return a+b};
//console.log(sum(2,3));

//const data = function(msg){
  //  return "hello Akshay ! "+msg;
//}
//console.log(data("How are you?"));


//IIFE
// (()=>{console.log("Using iife function")})();

//call back function
// function add(a,b){
//     return a+b;
// }
// function addWithmsg(clbk,msg){
//     const result = clbk(3,4);
//     console.log("hey ,your result is :"+result+" Well done! "+msg);

// }
// addWithmsg(add,"Akshay");

// function login(msg,error){
//     if(error){
//         console.log("Error :"+error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginhandler(username,password,clbk){
//     if(username=="Akshay"&&password == "12345"){
//         clbk("success",null);
//     }
//     else{
//         clbk(null,"Invalid username or password");
//     }
// }
// loginhandler("Akshay","12345",login);
// loginhandler("Divyam","12345",login);

//console.log("one");
//console.log("two");
// for(i=1;i<100;i++){
//     console.log("two");
// }
// setTimeout(() =>{console.log("two");
// }, 1000)

// console.log("three");

// setTimeout(()=>{
//     console.log("one");
//     setTimeout(()=>{
//         console.log("two");
//         setTimeout(()=>{
//             console.log("three");
//             setTimeout(()=>{
//                 console.log("four");
//                 setTimeout(()=>{
//                     console.log("five");
//                 },1000)
//             },1000)
//         },1000)
//     },1000)

// })


// const mypromise = new Promise ((resolve,reject)=>{
//     const username = "Akshay";
//     const password ="123456";
//     if(username=="Akshay"&& password =="123456"){
//         resolve(" Success");
//     }
//     else{
//         reject ("Invalid details.");
//     }
// })

// mypromise.then((msg)=>
// {
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// }).finally(()=>{
//     console.log("All done");
// })

// const EvenOdd = new Promise((resolve,reject)=>{
//     const num = 5;
//     if(num%2==0){
//         resolve("Even number");
//     }
//     else{
//         reject("Odd number");
//     }
// })

// EvenOdd.then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// }).finally(()=>{
//     console.log("done");
// })

// async function handleData(){
//     try {
//         const result = await mypromise;
//         console.log(result);
//     }catch(error){ 
//         console.log(error);
//     }finally{
//         console.log("All done");
//     }
// }
// handleData();

// const orderRecieved = new Promise((resolve,reject)=>{
//     if(true){
//      setTimeout(()=>{
//         resolve("Order recieved");},1000)  
   
//     }
//     else{
//      setTimeout(()=>{reject("Order failed");},1000)   
//     }
// }
// )
// async function orderHandel(){
//     try{
//         const result = await orderRecieved;
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }finally{
//         console.log("All done");
//     }
// }
// orderHandel();
// const button =document.getElementById("btn");
// const container = document.getElementById("container");
// console.log(button);
// async function fetchData(){
    // const serverData = await fetch("https://fakestoreapi.com/products");
    // const jsonData = await serverData.json();
   // console.log(jsonData);
//    container.innerHTML=JSON.stringify(`${jsonData}`);
// }
// button .addEventListener("click",fetchData);
// //fetchData();

// async function fetchData(){
//   try{
//     const serverData = await fetch("https://fakestoreapi.com/products");
//        const jsonData =await serverData.json();
//        console.log(jsonData);
//   }catch(e){
//     //loading.innerHTML ='<h2>Loading error</h2>';
//   }
//   finally{
//     //loading.innerHTML ='<h2>Loading done</h2>';
//   }
// }
// button.addEventListener("click",fetchData);

// const loading=document.createElement('div');
// container.appendChild(loading);

// async function fetchData(){
//   try{
//     loading.innerHTML ='<h2>Loading Data</h2>';
//     const serverData = await fetch ("https://fakestoreapi.com/products");
//     const jsonData = await serverData.json();
//     console.log(jsonData);
//     container.innerHTML=JSON.stringify(jsonData);
//   }catch(e){
//     loading.innerHTML ='<h2>Loading error</h2>';
//   }finally{
//     loading.innerHTML ='';
//   }
// }
// button.addEventListener("click",fetchData);

const button =document.getElementById("btn");
const container = document.getElementById("container");
async function fetchData(){
  try{
    loading.innerHTML ='<h2>Loading Data</h2>';
    const serverData = await fetch ("https://fakestoreapi.com/products");
    const jsonData = await serverData.json();
    console.log(jsonData);
    container.innerHTML=JSON.stringify(jsonData);
    let table = '<table border = "4px">';
     '<tr><td>ITEM_NAME</td><td>TITLE</td><td>PRICE</td></tr>';
     ${
      jsonData.map((ele)=>(
        <tr>
          <td><img src="${ele.image}" alt="${ele.title}" width="100"/></td>
          <td>${ele.id}</td>
          <td>${ele.title}</td>
          <td>${ele.price}</td> 
        </tr>
      ))
     }
     <table>
      container.innerHTML = table;
     </table>

  }catch(e){
    loading.innerHTML ='<h2>Loading error</h2>';
  }finally{
    loading.innerHTML ='';
  }
}
button.addEventListener("click",fetchData);
