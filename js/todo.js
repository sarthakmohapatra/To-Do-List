//checkoff specific todos by clicking
$("ul").on("click", "li", function(){
  //check if color is grey, then toggle
  $(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//adding new todos with ENTER in input
$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

//Toggle fading of Input text
$(".fa-plus").click(function(){
  $("input[type = 'text']").fadeToggle();
});
