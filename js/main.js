
// change img src in small width 
if(window.innerWidth < 1000){
  document.getElementById('banner').src = './images/banner.jpg';  
};
// scroll top left when reload
window.scrollTo(0,0);

// parallax !!!!!!!!!
function parallax(element,distance,speed){
   const item = document.querySelector(element);
   item.style.transform = `translateY(${distance*speed}px)` ;
}
window.addEventListener('scroll', function(){
  parallax('#banner',window.scrollY,0.85);
});
console.log(window.innerWidth);

const widthOutput = document.querySelector('#myBtn');
// width 
function reportWindowSize() {
  widthOutput.textContent = window.innerWidth;
}

setInterval(reportWindowSize, 10);
