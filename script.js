/*Slider Home*/
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 2000);
showSlide(currentIndex);


/*Toggle Tab*/
const tabs = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".tab-form");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
   
    tabs.forEach(t => t.classList.remove("active"));
    forms.forEach(f => f.classList.remove("active-form"));

    tab.classList.add("active");
    const selectedTab = tab.getAttribute("data-tab");
    document.getElementById(`${selectedTab}-form`).classList.add("active-form");
  });
});



//Brands
function scrollBrandsRight() {
    document.getElementById("brandScroll")
      .scrollBy({ left: 300, behavior: 'smooth' });
  }

  function scrollBrandsLeft() {
    document.getElementById("brandScroll")
      .scrollBy({ left: -300, behavior: 'smooth' });
  }



  //Security for not to copy
  document.addEventListener('copy', function(event) {
      event.preventDefault();
      event.clipboardData.setData('text/plain', 'Content copying is disabled on this page.');
    });

