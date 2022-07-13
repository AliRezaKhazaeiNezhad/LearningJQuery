// Learn 03
// function ShowDiv(){
//     $("div").show();
// }

// function HideDiv(){
//     $("div").hide();
// }









// Learn 04
// function ShowDiv(){
//     $(".divItem").show();
// }

// function HideDiv(){
//     $(".divItem").hide();
// }














// Learn 05
// function ShowDiv(){
//     $(".red").show();
// }

// function HideDiv(){
//     $(".red").hide();
// }










// Learn 06
// function FadeInDiv(){
//     $(".red").fadeIn();
// }

// function FadeOutDiv(){
//     $(".red").fadeOut();
// }








// Learn 07
// function FadeInDiv(){
//     $(".red").fadeIn("slow");
// }

// function FadeOutDiv(){
//     $(".red").fadeOut("slow");
// }









//Learn 08
// function FadeInDiv(){
//     $(".red").fadeIn(5000);
// }

// function FadeOutDiv(){
//     $(".red").fadeOut(3000);
// }









//Learn 09
// function FadeOutDiv(){
//     $(".red").fadeOut(3000).fadeIn();
// }






// function Action(){
//     // $("span.data.red[name='test']").hide();
//     $("[name='test']").hide();
// }








// $("#test").on("click", function(){
//     $("span").hide();
// });




$("button#test").on("click", function(){
    $("span").hide();
});

$("button:not(#test)").on("click", function(){
    $("span").show();
});
