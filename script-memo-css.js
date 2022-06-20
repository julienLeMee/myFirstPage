const navbar = document.querySelector(".menu");
const btn = document.querySelector(".burger");
const cards = document.querySelector(".content");
const cards2 = document.querySelector(".logo-css");
const burger = document.querySelector(".burger1")
const burger2 = document.querySelector(".burger2")
const burger3 = document.querySelector(".burger3")
const allCards = document.querySelectorAll(".cardCellule")
const titleCard = document.querySelectorAll(".cardTitle")
const title = document.querySelectorAll("card-header")

      btn.addEventListener("click", function() {
        navbar.classList.toggle("active");
        cards.classList.toggle("desactive");
        cards2.classList.toggle("desactive");
        burger.classList.toggle("cross1");
        burger2.classList.toggle("burger2");
        burger3.classList.toggle("cross3");
 });
 

 allCards.forEach(function(card){
    card.addEventListener("click", function(){
        card.classList.toggle("reveal");
        
    })
    // titleCard.forEach(changeClass)

})

  
// function changeClass(e){
//     e.classList.replace("cardTitle", "card-header")
// }