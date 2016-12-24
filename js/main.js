var imgArray = ["imgs/barcelona.png","imgs/clouds.png","imgs/blue-apple.png"];
var i = 0;
function next(){
  var imgSlider = document.getElementById('imgSlider');
  i++;
  imgSlider[i];
  if(i >= imgArray.length){
    i = 0;
  }
  imgSlider.src = imgArray[i];
}

function prev(){
 var imgSlider = document.getElementById('imgSlider');
 i--;
 imgSlider[i];
 if(i < 0){
   i = imgArray.length-1;
 }
 imgSlider.src = imgArray[i];
}
