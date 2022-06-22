const body = document.querySelector('body');

window.addEventListener('scroll', () => {
    console.dir(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 700) {
        document.body.classList.add('bgActive');
        if (document.documentElement.scrollTop > 2100) {
            document.body.classList.add('bgActive2');
            if (document.documentElement.scrollTop > 3200) {
                document.body.classList.add('bgActive3');
            }
        } 
    }

    if (document.documentElement.scrollTop < 3200) {
        document.body.classList.remove('bgActive3');
        if (document.documentElement.scrollTop < 2100) {
            document.body.classList.remove('bgActive2');
            if (document.documentElement.scrollTop < 700) {
                document.body.classList.remove('bgActive');
            }
        }
    }
});

// const squares = document.querySelectorAll('.square');

// window.addEventListener('load', () => {
// setTimeout(() => {
//     document.squares.classList.add('squareActive');
// }
// , 3000);
// });


// window.addEventListener("scroll", bgChange);
// const navbar = document.querySelector(".menu");
// const btn = document.querySelector(".burger");
// const cards = document.querySelector(".menu-cards");
// const burger = document.querySelector(".burger1")
// const burger2 = document.querySelector(".burger2")
// const burger3 = document.querySelector(".burger3")
// const float = document.getElementById("float")

//       btn.addEventListener("click", function() {
//         navbar.classList.toggle("active");
//         cards.classList.toggle("desactive");
//         burger.classList.toggle("cross1");
//         burger2.classList.toggle("burger2");
//         burger3.classList.toggle("cross3");
//  });

