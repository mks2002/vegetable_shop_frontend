 
 let nav = document.querySelector(".navbar");

 window.onscroll = function(){
   if(document.documentElement.scrollTop> 50){
      nav.classList.add("header-scrolled");
   }else{
      nav.classList.remove("header-scrolled");
   }
 }
 
 let navbar= document.querySelectorAll(".nav-link");

//  grouping of two class
 let nanvcollapse=document.querySelector(".navbar-collapse.collapse");
 navbar.forEach( function (e) {
   
   // show is a bootstrap class which we remove from the navlink after clicking on this..
e.addEventListener("click", function () {
   nanvcollapse.classList.remove("show");
})

 })