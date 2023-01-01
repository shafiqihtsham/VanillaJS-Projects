const wrapper = document.querySelector(".sliderWrapper");
console.log(wrapper);
const menuItem = document.querySelectorAll(".menuItem");
console.log(menuItem);
wrapper.style.transform = "translateX(10px)";

menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = 'translateX(${5 * index}vw';
    })
});