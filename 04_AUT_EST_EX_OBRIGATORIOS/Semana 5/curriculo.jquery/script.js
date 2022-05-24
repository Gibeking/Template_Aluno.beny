alert('OLA,BEM VINDO')

  $(document).ready(function(){
    $("#flip").click(function(){
     $("#panel").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



