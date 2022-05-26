let box=document.querySelector(".box");



function mousemove(event){
    let x=event.clientX;
    let y=event.clientY;
    //console.log(x+"px",y);

    box.style.transform =`translate(${x+"px"},${y+"px"})`;
    //box.style.transform =`translateY(${y+"px"})`;
   
}
//window.addEventListener('mousemove', mousemove);
box.ondragstart=function(e){
    e.dataTransfer.setData("id", this.id);
}

box.ondrag=function(event){
    let x=event.clientX;
    let y=event.clientY;
    //console.log(x+"px",y);

    box.style.transform =`translate(${x+"px"},${y+"px"})`;
    // box.style.marginLeft  =x+"px";
    // box.style.marginTop   =y+"px";
}

window.ondragover=function(e){
    e.preventDefault();
}

window.ondrop=(event)=>{
    let x=event.clientX;
    let y=event.clientY;
    //console.log(x+"px",y);

    box.style.transform =`translate(${x+"px"},${y+"px"})`;
}

