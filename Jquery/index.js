$("h1").addClass("big-title margin");

$("button").text("dont click me");

$("a").attr("href", "https://www.yahoo.com");

//menu drop down

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5})
});

$("input").keypress(function(event) {
console.log(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
});

