 let value=0;
 function inc(){
  if (value%2==0){
    document.querySelector(".value").style .color="red";
  }
  else{
    document.querySelector(".value").style .color="green";
  }
document.querySelector(".value").textContent=++value;
}
function dec(){
  if (value%2==0){
    document.querySelector(".value").style .color="red";
  }
  else{
    document.querySelector(".value").style .color="green";
  }
  document.querySelector(".value").textContent=--value;
}
