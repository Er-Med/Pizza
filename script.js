let bar = document.getElementById('menu-bar');
let smMenu = document.querySelector('nav');

let mainImage = document.getElementById('main-image');
let maintitle = document.getElementById('title');

//SHOW AND HIDE BAR ON CLICK
bar.addEventListener('click',()=>{
  let navClass = smMenu.classList;
  navClass.toggle("lg-nav");
  navClass.toggle("sm-menu-bar");
})

//SHOW AND HIDE SMALL MENU BAR ON RESIZE
document.body.onresize = function(){
  w = document.body.clientWidth;
  if(w > 768){
    smMenu.className = "lg-nav"
  }
}

window.addEventListener('load',()=>{
  mainImage.style.transform = "translateX(0)"
  maintitle.style.transform = "translateX(0)"
})
