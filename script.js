let menu = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .flex .navbar');
let header = document.querySelector('.header');
let arrow = document.querySelector('.up');
menu.addEventListener('click',function(){
  menu.classList.toggle('fa-times');
  navBar.classList.toggle('active');
});

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    header.style.backgroundColor='var(--white)';
 this.scrollY > 1500 ? arrow.classList.add('show') : arrow.classList.remove('show');  
}

arrow.onclick =()=>{
    window.scrollTo({
        top: 0,
    });  
}