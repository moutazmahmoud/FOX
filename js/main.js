
// change img src in small width 
if(window.innerWidth < 1000){
  document.getElementById('banner').src = './images/banner.jpg';  
};
// // scroll top left when reload
// window.scrollTo(0,0);

// parallax !!!!!!!!!
function parallax(element,distance,speed){
   const item = document.querySelector(element);
   item.style.transform = `translateY(${distance*speed}px)` ;
}
window.addEventListener('scroll', function(){
  parallax('#banner',window.scrollY, 0.85);
});

const pic1 = document.querySelector('#banner-about');

const banner = () =>{
  if(window.outerWidth > 1100 ){
    window.addEventListener('scroll', function(){
      parallax('#banner-about', window.scrollY, -0.10);
      console.log(window.innerWidth)
    })
    };
}
setInterval(banner,400);

const widthOutput = document.querySelector('#myBtn');
// width 
function reportWindowSize() {
  widthOutput.textContent = window.innerWidth;
  // console.log(pic1.scrollTop, pic1.scrollLeft,window.pageYOffset,window.scrollY);

  
}

setInterval(reportWindowSize, 800);

// toogle burger icon\ by click
const navshow = () => {
    const burger = document.querySelector('.burger') ,
          navlinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
      burger.classList.toggle('toggle');
      navlinks.classList.toggle('show')

    })

}
navshow();