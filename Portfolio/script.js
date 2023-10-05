let rightScroll = document.getElementById("two");
let leftScroll = document.getElementById("one");
let container = document.querySelector(".projects");

rightScroll.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("cliked");
    container.scrollLeft += 350;
})

leftScroll.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("cliked");
    container.scrollLeft -= 350;
})