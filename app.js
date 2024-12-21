const imgs=document.querySelectorAll(".slider ul img");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");

let n=0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block";
}
changeSlide();

next.addEventListener("click",(e)=>{
    if(n == imgs.length -1){
        n=0;
    }
    else{
        n++;
    }
    changeSlide();
})
prev.addEventListener("click",(e)=>{
    if(n == 0){
        n=imgs.length-1;
    }
    else{
        n--;
    }
    changeSlide();
})

