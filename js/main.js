function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}


var smartIcons = document.getElementsByClassName('circles');
// Talented
var profileWrapper = document.getElementsByClassName('profile-wrapper');
var profile = document.getElementsByClassName('profiles');
// Elegant section
var pic = document.getElementsByClassName('pic');

profile[0].style.left = '-15px';
profile[1].style.left = '-30px';
profile[2].style.right = '-30px';
profile[3].style.right = '-15px';

// List through profiles and pics and add opacity and transform
for(var i = 0; i<profile.length && i<pic.length; i++){
  profile[i].style.opacity = '0';
  pic[i].style.transform = 'scale(.01)';
}


$(window).scroll(function(){
  if(elementInViewport(smartIcons[0])){
    smartIcons[0].style.opacity = 1;
  }
  if(elementInViewport(smartIcons[1])){
    smartIcons[1].style.opacity = 1;
  }
  if(elementInViewport(smartIcons[2])){
    smartIcons[2].style.opacity = 1;
  }

  // TEAM

  // two Left profiles
  if(elementInViewport(profileWrapper[0])){
    profile[0].style.left = '0';
    profile[0].style.opacity = '1';
  }
  if(elementInViewport(profileWrapper[1])){
    profile[1].style.left = '0';
    profile[1].style.opacity = '1';
  }
  // two right profiles
  if(elementInViewport(profileWrapper[2])){
    profile[2].style.right = '0';
    profile[2].style.opacity = '1';
  }
  if(elementInViewport(profileWrapper[3])){
    profile[3].style.right = '0';
    profile[3].style.opacity = '1';
  }

  // Elegant
  if(elementInViewport(pic[0])){
    pic[0].style.transform = 'scale(1)';
  }
  if(elementInViewport(pic[1])){
    pic[1].style.transform = 'scale(1)';
  }
  if(elementInViewport(pic[2])){
    pic[2].style.transform = 'scale(1)';
  }
  if(elementInViewport(pic[3])){
    pic[3].style.transform = 'scale(1)';
  }
});
