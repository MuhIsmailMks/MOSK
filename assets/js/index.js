const popUpContainer = document.getElementById('pop-up');
const closePopUpBtn = document.getElementById('enter');
const menu_btn = document.querySelectorAll('.menu_btn');
const menu_container = document.querySelector('.menu_container');
const close_menu_btn = document.querySelector('.close-btn');


closePopUpBtn.addEventListener('click' ,() => { 
    popUpContainer.classList.remove('active')
    popUpContainer.classList.add('noneActive')
})
 
// navbar 
window.addEventListener('scroll', function() {
  let nav = document.getElementById('nav');
  let scrollPos = window.scrollY;
  if (scrollPos > 100) {
    nav.classList.add('scroller');
    nav.classList.remove('fixScroll');
  } else {
    nav.classList.add('fixScroll');
    nav.classList.remove('scroller');
  }
});

menu_btn.forEach(menuBtn => {
    menuBtn.addEventListener('click',() => { 
        menu_container.classList.add('active')
    })
})

menu_container.addEventListener('click', (e) => {
    let target = e.target 
    if(target.hasAttribute('href')){
        menu_container.classList.remove('active')
    } 
})

close_menu_btn.addEventListener('click',() => { 
    menu_container.classList.remove('active')
})


// change image
// Ambil elemen gambar
const howToImg = document.querySelector('.howTo img');
const moskImg = document.querySelector('.mosk img');
const moskPlansImg = document.querySelector('.mosk_plans img');

// Fungsi untuk mengubah gambar berdasarkan lebar layar
function changeImage() { 
    const screenWidth = window.innerWidth; 
    
    // how to 
    const howTo = (screenWidth < 1280) ? './assets/icons/howToGet_mobile.svg' : './assets/icons/howToGet_desk.svg';
   
    // mosk 
    const mosk = (screenWidth < 1280) ? './assets/icons/mosk_mobile.svg' : './assets/icons/mosk_desk.svg';
    
    // mosk plans
    const moskPlans = (screenWidth < 1280) ? './assets/icons/mosk_plans_mobile.svg' : './assets/icons/mosk_plans_desk.svg';
 
    howToImg.src = howTo;
    moskImg.src = mosk;
    moskPlansImg.src = moskPlans;
}
 
window.addEventListener('DOMContentLoaded', changeImage);
window.addEventListener('resize', changeImage);

// swiper 1 for how to get
const swiper1 = document.querySelector('.swiper-container1');
  
const swiperParams1 = {
  slidesPerView: 1,
  breakpoints: {
    1: {
      direction: 'vertical', 
      slidesPerView: 'auto',
      spaceBetween:50,   
    }, 
    768: {
      direction: 'horizontal', 
      slidesPerView: 'auto',
      spaceBetween:20,   
    }, 

  },
  freeMode:true,
  on: {
    init() { 
    },
  },
};

Object.assign(swiper1, swiperParams1);
swiper1.initialize();

// swiper 2 for meme
  const swiper2 = document.querySelector('.swiper-container2');
  
  const swiperParams2 = {
    slidesPerView: 1,
    spaceBetween:10,
    freeMode:true,
    on: {
      init() { 
      },
    },
  };
  
  Object.assign(swiper2, swiperParams2);
  swiper2.initialize();

  // times  
const initialCountDownDate = new Date("Mar 7, 2024 00:00:00").getTime();
 
let x = setInterval(function() {
 
  let now = new Date().getTime();
   
  let distance = now - initialCountDownDate;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("day").innerHTML = (days + 1) + " days"
  document.getElementById("countdown").innerHTML = hours + "H "+ minutes + "M " + seconds + "S";

}, 1000);


  // animation 
// controller ScrollMagic
let controller = new ScrollMagic.Controller();

// animation scroll effext
const animations = [
  { selector: ".contract", duration: 300, x: -300 },
  { selector: ".catsanomics-images", duration: 5000, x: -300 }, 
];

function adjustXValue() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1200) { 
    animations.forEach(animation => {
      animation.x = animation.x * 4;
    });
  } 
}
 
adjustXValue();
window.addEventListener('resize', adjustXValue);



let tween1, tween2,tween3;

animations.forEach(animation => {
  let tween = gsap.to(animation.selector, {duration: 300, x: animation.x});

  let scene = new ScrollMagic.Scene({
    triggerElement: animation.selector,
    duration: animation.duration
  })
  .setTween(tween)
  .addTo(controller);
});
