let menu_bar = document.getElementById('menu-bar');
let nav =  document.querySelector('.nav');


menu_bar.addEventListener('click',function(event){
    event.preventDefault;
    nav.classList.toggle('checked');
});

window.addEventListener('scroll',function(event){
      
      const label = document.querySelector('#label');
      if(window.scrollY>0){
        label.style.color = 'black';
      }else if(window.scrollY==0){
        label.style.color = '#fff';
      }
});

var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("servicio");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
  