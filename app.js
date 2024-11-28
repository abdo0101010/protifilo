header = document.querySelector(".navbar");
console.log(header);
window.onscroll=function(){
    if(this.scrollY>=100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
