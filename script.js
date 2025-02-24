let profilemenu= document.getElementById("profileMenu");

    function toggleMenu(){
        profileMenu.classList.toggle("open-menu");
    }


let sideActivity = document.getElementById("sidebarActivity");
let morelink = document.getElementById("showMoreLink");

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")){
        showMoreLink.innerHTML = "Show less <b>-</b>";
    }
    else{
        showMoreLink.innerHTML = "Show more <b>+</b>";   
    }

}