$(document).ready(function(){


  $("#design").click(function() { 
      $("#what_we_do_img").hide();
      $("#design_text").show(); 
    
  });

  $("#design").click(function() { 
    $("#design_text").show();
     $("#what_we_do_img").hide();
    
  });  
  

  $("#development").click(function() { 
    $("#development_img").hide();
    $("#development_text").show(); 
  
});

$("#development").click(function() { 
  $("#development_text").show();
   $("#development_img").hide();
  
});  
  
$("#products").click(function() { 
  $("#product_img").hide();
   $("#product_text").show(); 

});

$("#products").click(function() { 
  $("#product_text").show();
   $("#product_img").hide();

});  


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
