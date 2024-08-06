$("h1").addClass("big-title"); 

$("h1").text("Bye"); 

$("button").html("<em>Hey</em>");

$('a').attr("href","https://www.yahoo.com/" ); 

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("document").keypress(function(event){
    $("h1").text("event.key"); 
});

//$("h1").on("mouseover", function(){
    //$("h1").css("color", "purple"); 
//}); 

//$("h1").on("click", function(){
    //$("h1").animate({opacity: 0.5});
//}); 

$("h1").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
}); 

