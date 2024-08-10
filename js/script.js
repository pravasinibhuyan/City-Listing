var page_plus = document.getElementById("pageplus");
var page_minus = document.getElementById("pageminus");
var categories = document.getElementById("categories");
var angle_icon = document.getElementById("angle-icon");
var category_list = document.getElementById("categories-list");


// function showPagelist(){
//     if(page_plus.style.display=="block"){
//         page_minus.style.display="none";
//     }
//     else{
//         page_minus.style.display="block";
//     }
// }
// function resize(){
//     if (window.innerWidth >=991){
//         document.getElementById("menu-list").style.display="flex";
//     }
// }

$(".menu-bar").click(function(){
    $(".menu-list").slideToggle();
})


   
$(".page").click(function(){
    if (window.innerWidth <= 991){
    $("#page-list").slideToggle();
    }
    if($("#pageplus").css("display") =="block"){
        page_plus.style.display="none";
        page_minus.style.display="block";
    }
    else{
        page_plus.style.display="block";
        page_minus.style.display="none";
    }
}
)

categories.onclick = function(){
       angle_icon.classList.toggle("angle-icon-rotate");
       document.getElementById("categories-list").classList.toggle("categories-list-change");
}
angle_icon.onclick = function (){
    angle_icon.classList.toggle("angle-icon-rotate");
    document.getElementById("categories-list").classList.toggle("categories-list-change");
}

window.onscroll = function () {

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        document.getElementById("top-button").style.display ="block";
        document.getElementById("navigation").classList.add("sticky-navigation");
     }
     else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
        document.getElementById("navigation").classList.remove("sticky-navigation");
        document.getElementById("top-button").style.display ="none";
     }
};


function topFunction(){
  document.documentElement.scrollTop ="0";
}



var list = document.querySelectorAll(".categories-list li");
for (var i = 0; i < list.length; i++) {
  let li = list[i];
  li.addEventListener("click", function () {
    if (category_list.classList.contains("categories-list-change")) {
      categories.placeholder = li.innerHTML;
      category_list.classList.remove("categories-list-change");
      angle_icon.classList.remove("angle-icon-rotate");
    }
  });
}
