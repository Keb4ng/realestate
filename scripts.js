$(document).ready(function(){

    $(".banner-slick").slick({
        autoplay: true,
        arrows: false,
        speed: 500
        });
  
        window.onscroll = function() {myFunction()};
  
        var header = document.getElementById("fixed-header");
        var invert = document.getElementById("header-logo");
        var sticky= header.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset > sticky ) {
                header.classList.add("transform");
                invert.classList.add("transform3");
                
            } else {
                header.classList.remove("transform");
                invert.classList.remove("transform3");
            }
        }

        var logo = document.querySelector(".burger-menu");
        var menu = document.querySelector(".sliding-menu");
        var close = document.querySelector(".slider-close");

        logo.addEventListener('click', function(){
            menu.classList.toggle("slider-active");
        });

        close.addEventListener('click', function(){
            menu.classList.toggle("slider-active");
        });

        var qs_btn = document.querySelector(".inner-qs-button");
        var qs_show =document.querySelector(".qs-container");

        qs_btn.addEventListener('click', function(){
            qs_show.classList.toggle("qs-toggle")
        });


        const observer =  new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
});