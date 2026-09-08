import react from 'react'
import cat from '../images/cat.png'
import { useState } from 'react'

function Imagemanupulation() {
const [height,setHeight] = useState(200);
const [width,setWidth] = useState(200);
const[red,setRed] = useState(20);
const[green,setGreen] = useState(30);
const[blue,setBlue] = useState(60);
const[angle,setAngle] = useState(0);
const[marginTop,setMarginTop] = useState(0);
const[marginLeft,setMarginLeft] = useState(0);
function enhanceHeight(){
    setHeight(height+10);
}
function enhanceWidth(){
    setWidth(width+10);
}
function reduceHeight(){
    setHeight(height-10);
}
function reduceWidth(){
    setWidth(width-10);
}
function changeBGcolor(){
    setRed((Math.random()*256));
    setGreen((Math.random()*256));
    setBlue((Math.random()*256)); 
}
function rotateImage(){
setAngle(angle+45);
}
function margintop(){
  setMarginTop(marginTop+100);
}
function marginleft(){
  setMarginLeft(marginLeft+100);
}
    return (
        <div>
            <h1 style={{color:'white', backgroundColor:'red'}}>Image Manipulation</h1>
<div style={{border:'2px solid blue', margin:'300px', height:'400px',width:'400px'}}>
<img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red},${green},${blue})`,transform:`rotate(${angle}deg)`,margin:`${marginTop}px ${marginLeft}px`}}/>
<div>
    <h2>Height: {height}</h2>
    <h2>Width: {width}</h2>
    <div>
        <h2>Color code: {red}, {green}, {blue}</h2>
    </div>
    
</div>

</div>
<button onClick={enhanceHeight}>Enhance Height</button>
<button onClick={enhanceWidth}>Enhance Width</button>
<button onClick={reduceHeight}>Reduce Height</button>
<button onClick={reduceWidth}>Reduce Width</button>
<button onClick={changeBGcolor}>Change BGcolor</button>
<button onClick={rotateImage}>Rotate Image</button>
<button onClick={margintop}>Margin Top</button>
<button onClick={marginleft}>Margin Left</button>
</div>

    )
}

export default Imagemanupulation