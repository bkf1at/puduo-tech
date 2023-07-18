$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});

document.addEventListener("DOMContentLoaded", function(event) 
{ 


  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');
    
  for (var i = 0; i < acc.length; i++) 
  {
    acc[i].onclick = function() 
    {
      var setClasses = !this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');
    
      if (setClasses) 
      {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    }
  }
    
  function setClass(els, className, fnName) 
  {
    for (var i = 0; i < els.length; i++) 
    {
      els[i].classList[fnName](className);
    }
  }

  function myFunction() {
    document.getElementById("mySubmit").formTarget = "_blank";
    document.getElementById("demo").innerHTML = "The value of the formtarget attribute was changed from '_blank' to '_self'.";
  }
});    
