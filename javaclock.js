const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateclock(){
    const currentdate = new Date();
    // this is for access time every secondEl;
    // setTimeout(updata,1000);
    const hour = currentdate.getHours();    
    const minute = currentdate.getMinutes();    
    const second = currentdate.getSeconds(); 
    const hourdeg = (hour/12) * 360;
    hourEl.style.transform = `rotate(${hourdeg}deg)`;
    const minutedeg = (minute/60) * 360;
    minuteEl.style.transform = `rotate(${minutedeg}deg)`;
    const seconddeg = (second/60) * 360;
    secondEl.style.transform = `rotate(${seconddeg}deg)`;

}
// updateclock();
setInterval(updateclock,1000)