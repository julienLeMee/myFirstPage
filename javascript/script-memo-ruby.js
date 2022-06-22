const navbar = document.querySelector(".menu");
const btn = document.querySelector(".burger");
const cards = document.querySelector(".menu-cards");
const burger = document.querySelector(".burger1")
const burger2 = document.querySelector(".burger2")
const burger3 = document.querySelector(".burger3")

      btn.addEventListener("click", function() {
        navbar.classList.toggle("active");
        cards.classList.toggle("desactive");
        burger.classList.toggle("cross1");
        burger2.classList.toggle("burger2");
        burger3.classList.toggle("cross3");
 });