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


// text circle 
// const text = document.querySelector(".circle-text h2");

// function setRotationDegree() {
//   const screenWidth = window.innerWidth;
//   let rotationDegree;

//   if (screenWidth > 1000) {
//     rotationDegree = 5.4;
//   } else if (screenWidth <= 1000 && screenWidth > 800) {
//     rotationDegree = 4.2;
//   } else if (screenWidth <= 800 && screenWidth > 600) {
//     rotationDegree = 3;
//   } else if (screenWidth <= 600 && screenWidth > 400) {
//     rotationDegree = 3;
//   } else {
//     rotationDegree = 2.4;
//   }

//   return rotationDegree;
// }

// function updateTextRotation() {
//     const rotationDegree = setRotationDegree();
//     const spans = text.querySelectorAll('span');  
//     text.innerHTML = text.innerHTML
//       .split("")
//       .map((char, i) => `<span style="transform:rotate(${i * rotationDegree}deg)">${char}</span>`)
//       .join("");

//   }
// updateTextRotation();
 

//  swiper slider 


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
      spaceBetween:30,   
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