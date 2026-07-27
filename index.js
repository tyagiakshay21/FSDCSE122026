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

function login(msg,error){
    if(error){
        console.log("Error :"+error);
    }
    else{
        console.log(msg);
    }
}

function loginhandler(username,password,clbk){
    if(username=="Akshay"&&password == "12345"){
        clbk("success",null);
    }
    else{
        clbk(null,"Invalid username or password");
    }
}
loginhandler("Akshay","12345",login);
loginhandler("Divyam","12345",login);