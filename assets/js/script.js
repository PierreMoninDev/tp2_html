const buttons=document.querySelectorAll("[data-caroussel-button]")
console.log("script");
buttons.forEach(button => {
button.addEventListener("click",() =>{
    console.log("click");
    const offset= button.dataset.carousselButton === "next" ? 1: -1
    const slides= button
    .closest("[data-caroussel")
    .querySelector("[data-slides]")
    console.log("offset");
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex= [...slides.children].indexOf(activeSlide) + offset
    if(newIndex<0)newIndex=slides.children.length-1
    if(newIndex >= slides.children.length) newIndex=0
    console.log(newIndex);
    slides.children[newIndex].dataset.active=true
    delete activeSlide.dataset.active
})
})