// const container = document.getElementById("container");
// console.log(container);
// const root = ReactDOM.createRoot(container);
// const h2 = React.createElement(
//   "h2", null,"Hello, React using JS");
// root.render(h2); 

// const img= React.createElement("img", {src :"https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",style :{width:"800px", height:"800px"}}, null);
// const div=React.createElement("div", [],h2, img);
const container=document.getElementById('container');

const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React JS');
// const h1=React.createElement('h1',{},"Working on React DOM");
// const img=React.createElement('img',{src:'',style:{height:'200', width:'200'}});
//const h11=<h1>Hello Using Babel </h1>;

// const div=React.createElement('div',{},img,h1,h2,h11);

const h1=<h1>Welcome to React</h1>;
const img=<img src='https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg' height={100} width={100}></img>;
// const div=[h1,img];
const div=<div>{h1}{img}</div>;
const h3=<h3>Resume Builder </h3>
const div1=
    <>
    <div style={{border:'2px solid red', height:'300', width:'400'}}>
    {h3}
    {div}
    </div>
    </>


root.render(div1);