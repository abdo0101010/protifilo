header = document.querySelector(".navbar");
console.log(header);
window.onscroll=function(){
    if(this.scrollY>=100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

let links = document.querySelector(".links");
console.log(links);

function  close_show_Menu(){
    links.classList.toggle("active-link");

}