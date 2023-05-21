document.addEventListener("DOMContentLoaded", () => {
   // @ts-ignore
    document.getElementById("slider").slider({
        current: 1,
        autoplay: true,
        interval: 3000
    });
});

   // @ts-ignore
const slides=document.querySelector(".slider").children;
   // @ts-ignore
   const indicatorImages=document.querySelector(".slider-indicator").children;

    for(let i=0; i<indicatorImages.length; i++){
    	indicatorImages[i].addEventListener("click",function(){
         
           for(let j=0; j<indicatorImages.length; j++){
             indicatorImages[j].classList.remove("active");
           }
              // @ts-ignore
            this.classList.add("active");
               // @ts-ignore
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
           	slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

    	})
    }
