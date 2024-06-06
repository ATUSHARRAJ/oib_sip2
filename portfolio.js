document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let values=true;
options=document.querySelector(".options");
body=document.querySelector("body");
options.disabled=true;
header=document.querySelector("header");
let check;
options.addEventListener("click",(e)=>{
    e.stopPropagation(); 
         if(values===true){
                   options.disabled=false;
                   header.style.visibility="visible";
                   values=false;
                 
         }
         else{
            options.disabled=true;
            header.style.visibility="hidden";
            values=true;
         }
})
let exceute = () => {
    if (values ===false) {
        options.disabled = true;
        header.style.visibility = "hidden";
        values = true;
    }
};

check = () => {
    if (window.innerWidth <= 482) {
        body.addEventListener("click", exceute);
        header.style.visibility = "hidden";
    } else {
        body.removeEventListener("click", exceute);
        header.style.visibility = "visible";
    }
};
check();
window.addEventListener("resize", check);