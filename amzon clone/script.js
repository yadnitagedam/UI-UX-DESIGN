


// 1st way

// let slideBtnLeft = document.getElementById("slide-bnt-left");
// let slideBtnRight = document.getElementById("slide-btn-right");
// let imageItem = document.querySelectorAll(".img-item");

// let startSlider = 0;
// let endSlider = (imageItem.length - 1) * 100;

// function updateSlider() {
//   imageItem.forEach((element) => {
//     element.style.transform = `translateX(${startSlider}%)`;
//   });
// }

// slideBtnLeft.addEventListener('click', () => {
//   if (startSlider < 0) {
//     startSlider = startSlider + 100;
//     updateSlider();
//   }
// });

// slideBtnRight.addEventListener('click', () => {
//   if (startSlider >= -endSlider + 100) {
//     startSlider = startSlider - 100;
//     updateSlider();
//   }
// });





// 2nd way

// // Initialize variables
// const imageList = document.querySelector(".image-list");
// const imgItems = document.querySelectorAll(".img-item");
// const sliderBtnLeft = document.getElementById("slide-btn-left");
// const sliderBtnRight = document.getElementById("slide-btn-right");
// let currentIndex = 0;

// // Function to slide images to the left
// function slideLeft() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlider();
//   }
// }

// // Function to slide images to the right
// function slideRight() {
//   if (currentIndex < imgItems.length - 1) {
//     currentIndex++;
//     updateSlider();
//   }
// }

// // Function to update the slider position
// function updateSlider() {
//   const translateValue = -currentIndex * 100; // 100% for each image
//   imageList.style.transform = `translateX(${translateValue}%)`;
// }

// // Add event listeners for left and right buttons
// sliderBtnLeft.addEventListener("click", slideLeft);
// sliderBtnRight.addEventListener("click", slideRight);




// 3rd way

// let slideBtnLeft = document.getElementsByClassName("slider-btn")[0]; // Select the first element with this class
// let slideBtnRight = document.getElementsByClassName("slider-btn")[1]; // Select the second element with this class
// let imgItem = document.querySelectorAll(".img-item");


// let startSlider = 0;
// let endSlider = (imgItem.length - 1) * 700; // Fix the "lenght" typo to "length"

// slideBtnLeft.addEventListener("click", () => {
//     if (startSlider < 0) {
//         startSlider = startSlider + 700;
//     }
//     imgItem.forEach(element => {
//         element.style.transform = `translateX(${startSlider}px)`;
//     });
// });

// slideBtnRight.addEventListener("click", () => {
//     console.log("Left button clicked");
//     if (startSlider >= -endSlider + 700) {
//         startSlider = startSlider - 700;
//     }
//     imgItem.forEach(element => {
//         element.style.transform = `translateX(${startSlider}px)`;
//     });
// });





// 4th way


// let slideBtnLeft = document.getElementById("slide-bnt-left")
// let slideBtnRight = document.getElementById("slide-btn-right")
// let imageItem = document.querySelectorAll(".img-item")

// let startSlider = 0
// let endSlider   = (imageItem.length-1) * 100

// slideBtnLeft.addEventListener('click',() => {
//     if(startSlider < 0){
//         startSlider = startSlider + 100;
//     }
//     imageItem.forEach(element => {
//         element.style.transform = `translateX(${startSlider}%)`
//     })

// })
// slideBtnRight.addEventListener('click',() => {
//     if(startSlider >=  -endSlider+100){
//         startSlider = startSlider - 100;
//     }
//     imageItem.forEach(element => {
//         element.style.transform = `translateX(${startSlider}%)`
//     })

// })






// 5th way

// const imageItems = document.querySelectorAll(".img-item");
// const slideBtnLeft = document.getElementById("slide-btn-left");
// const slideBtnRight = document.getElementById("slide-btn-right");
// let currentIndex = 0;


// function showCurrentImage() {
//     imageItems.forEach((item, index) => {
//       if (index === currentIndex) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   }
  
//   // Initialize by showing the first image
//   showCurrentImage();

//   slideBtnLeft.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
//     showCurrentImage();
//   });
  
//   slideBtnRight.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % imageItems.length;
//     showCurrentImage();
//   });
  