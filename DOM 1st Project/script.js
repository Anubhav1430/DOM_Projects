var nameChanged=document.querySelector("h5")


var btn=document.querySelector("#add")
var check = 0


btn.addEventListener("click",function(){
    if(check==0){
        nameChanged.innerHTML="Friends"
        nameChanged.style.color="green"
        btn.innerHTML="Remove Friend"
        check=1
    }else{
        nameChanged.innerHTML="Stranger"
        nameChanged.style.color="red"
        btn.innerHTML="Add Friend"
        check=0
    }
})



