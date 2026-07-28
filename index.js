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

const orderSuccess = new Promise((resolve,reject)=>{
    if(true){
        resolve("Order placed sucessfully");
    }
    else{
        reject("Order failed");
    }
}
)
async function orderHandel(){
    try{
        const result = await orderSuccess;
        console.log(result);
    }catch(error){
        console.log(error);
    }finally{
        console.log("All done");
    }
}
orderHandel();