var typeData = new Typed(".role", {
    strings: [
      "Full Stack Dev",
      "Web Developer",
      "UI-UX Designer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
const hamBtn = document.querySelector('.ham-menu')
const mobileMenu = document.querySelector('.dropdown_menu');
hamBtn.addEventListener('click',function(){
     mobileMenu.classList.toggle('flex');
     
})