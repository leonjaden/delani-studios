$(document).ready(function() {
  $(".what_we_do_img").click(function() { 
    $(".toggle_text").slideToggle();
    $(".what_we_do_img").slideToggle();
    
  });  
    $(".toggle_text").click(function() { 
      $(".what_we_do_img").slideToggle();
      $(".toggle_text").slideToggle(); 
    
  });
  

  $(".development_img").click(function() { 
    $(".development_text").slideToggle();
    $(".development_img").slideToggle();
    
  });  
    $(".toggle_text").click(function() { 
      $(".development_text").slideToggle();
      $(".toggle_text").slideToggle(); 
    
  });

  
  $(".product_img").click(function() { 
    $(".product_text").slideToggle();
    $(".product_img").slideToggle();
    
  });  
    $(".product_text").click(function() { 
      $(".product_img").slideToggle();
      $(".product_text").slideToggle(); 
    
  
  });


});


$(document).ready(function(){
  

  $("#formInput").submit(function(){
    console.log("leo");
      event.preventDefault();
      var name = $("#nameInput").val();
      var email = $("#emailInput").val();

    
      if ($("#nameInput").val() && $("#emailInput").val()){
        alert (name + ", we have received your details. Thank you for choosing Delani Studios.");
      }
      else {
        alert("Enter your name and email for further assistance");
      }

  });

});
