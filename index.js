var menu= document.querySelector("#nav i")
var cross= document.querySelector("#textinmenu i")


menu.addEventListener("click",function(){
   tl.play()
})


var tl=gsap.timeline()

gsap.from("#textinmenu i",{
    delay:3,
    opacity:0,
    duration:0.68,
    rotate:180,
})
tl.to("#full",{
    duration:0.68,
    right:0,
})

tl.from("h4",{
    duration:0.4,
    x:50,
    opacity:0,
    stagger:0.35
})
tl.pause()
cross.addEventListener("click",function(){
    tl.reverse()
})
