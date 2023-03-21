const botaoArrow1 = document.getElementById("arrow1");
botaoArrow1.addEventListener("click", fnDisplay1);
function fnDisplay1(){
  if(document.getElementById("display1-1").style.display=="none"){
    document.getElementById("display1-1").style.display="flex";
    document.getElementById("display1-2").style.display="flex";
    document.getElementById("arrow2").style.top="617px";
   document.getElementById("arrow3").style.top="692.5px";
    document.getElementById("arrow1").style.transform="rotate(45deg)"
    
  }else {
    document.getElementById("display1-1").style.display="none";
    document.getElementById("display1-2").style.display="none";
    document.getElementById("arrow2").style.top="400px";
   document.getElementById("arrow3").style.top="475px";
   document.getElementById("arrow1").style.transform="rotate(0deg)"
  }
  
}
const botaoArrow2 = document.getElementById("arrow2");
botaoArrow2.addEventListener("click", fnDisplay2);
function fnDisplay2(){
  if(document.getElementById("display2-1").style.display=="none" && document.getElementById("display1-1").style.display=="none") {
    
      document.getElementById("display2-1").style.display="flex";
      document.getElementById("display2-2").style.display="flex";
      document.getElementById("arrow3").style.top="693.5px";
    document.getElementById("arrow2").style.transform="rotate(45deg)"
    
  } else if(document.getElementById("display2-1").style.display=="none" && document.getElementById("display1-1").style.display=="flex"){
    document.getElementById("display2-1").style.display="flex";
      document.getElementById("display2-2").style.display="flex";
      document.getElementById("arrow3").style.top="910px";
    document.getElementById("arrow2").style.transform="rotate(45deg)"
  }else {
    document.getElementById("display2-1").style.display="none";
    document.getElementById("display2-2").style.display="none";
   document.getElementById("arrow3").style.top="475px";
   document.getElementById("arrow2").style.transform="rotate(0deg)"

  }
  return;
}
const botaoArrow3 = document.getElementById("arrow3");
botaoArrow3.addEventListener("click", fnDisplay3);
function fnDisplay3(){
  if(document.getElementById("display3-1").style.display=="none"){
    document.getElementById("display3-1").style.display="flex";
    document.getElementById("display3-2").style.display="flex";
   //document.getElementById("arrow3").style.top="693.5px";
    document.getElementById("arrow3").style.transform="rotate(45deg)"
    
  }else {
    document.getElementById("display3-1").style.display="none";
    document.getElementById("display3-2").style.display="none";
    document.getElementById("arrow3").style.transform="rotate(0deg)"
   //document.getElementById("arrow3").style.top="475px";

  }
  return;
}

const botaoConfirmar = document.getElementById("salvar");
botaoConfirmar.addEventListener("click", fnConfirmar);
function fnConfirmar(){
document.getElementById("box").style.display="flex"}



 
