var bars = document.querySelector('.fa-bars');
var telmenu = document.querySelector('.tel-menu');
var showMenu = false;
bars.onclick = function(){
    if(showMenu == false){
     telmenu.style.transform = 'translateY(0%)'
     bars.setAttribute('class',"fa-solid fa-x fa-2x")

     showMenu = true;
    }
    else{
        telmenu.style.transform = 'translateY(-200%)'
        bars.setAttribute('class',"fa-solid fa-bars fa-2x")
        showMenu = false;
    }
}