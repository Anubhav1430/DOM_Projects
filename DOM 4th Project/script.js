// This is for if you want to move only one image

// var elem1 = document.querySelector("#elem1")
// var elemImg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(details){
//     elemImg.style.left=details.x+"px"
//     elemImg.style.top=details.y+"px"
// })
// elem1.addEventListener("mouseenter",function(){
//     elemImg.style.opacity=1
// })
// elem1.addEventListener("mouseleave",function(){
//     elemImg.style.opacity=0
// })

var elem = document.querySelectorAll(".elem");
elem.forEach(function(val){
    // console.log(val.childNodes[3]) this is used to check the img positin in node list
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
        
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;

    });
    val.addEventListener("mousemove",function(details){
        val.childNodes[3].style.left=details.x+"px";
        // val.childNodes[3].style.top=details.y+"px";

    });
});
// var elem = document.querySelectorAll(".elem");
// elem.forEach(function(val){
//     // console.log(val.childNodes[3]) this is used to check the img positin in node list
//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity=1;
        
//     })
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity=0;

//     });
//     val.addEventListener("mousemove",function(details){
//         var elemRect = val.getBoundingClientRect();
//         var img = val.childNodes[3];  // Assign the image to the variable here
//         // Get cursor coordinates relative to the element
//         // cursor’s X position relative to the viewport and cursor’s Y position relative to the viewport
//         var x = details.clientX - elemRect.left - img.offsetWidth / 2;
//         var y = details.clientY - elemRect.top - img.offsetHeight / 2;
//         // Adjust the image to follow the cursor smoothly
//         img.style.left = x + "px";
//         img.style.top = y + "px";
 
//         // val.childNodes[3].style.left=details.x+"px";
//         // val.childNodes[3].style.top=details.y+"px";

//     });
// });
