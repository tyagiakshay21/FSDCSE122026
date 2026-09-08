// const container = document.getElementById("container");
// console.log(container);
// const root = ReactDOM.createRoot(container);
// const h2 = React.createElement(
//   "h2", null,"Hello, React using JS");
// root.render(h2); 

// const img= React.createElement("img", {src :"https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",style :{width:"800px", height:"800px"}}, null);
// const div=React.createElement("div", [],h2, img);
// root.render(div);
const container=document.getElementById('container');

const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React JS');
const h1=React.createElement('h1',{},"Working on React DOM");
const img=React.createElement('img',{src:'',style:{height:'200', width:'200'}});
const div2='<div></div>';

const div=React.createElement('div',{},img,h1,h2,div2);

root.render(div);