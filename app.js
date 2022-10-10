$(document).ready(function(){
  $(".navbar .nav-link").on('click', function(event) {

      if (this.hash !== "") {

          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 700, function(){
              window.location.hash = hash;
          });
      } 
  });
});


function itemsOnHover(id){
    document.getElementById(id+"-content").style.display = "block";
}

function itemsOnOut(id){
    document.getElementById(id+"-content").style.display = "none";   
}
