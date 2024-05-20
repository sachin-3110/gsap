window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to("#marquee",{
            duration:1.5,
            transform:`translateX(-180%)`,
            repeat:-1,
            ease:"none"
        })
        gsap.to("#marquee img",{
            rotate:180,
        })
    }
    else{
        gsap.to("#marquee",{
            duration:1.5,
            transform:`translateX(0%)`,
            repeat:-1,
            ease:"none"
        })
        gsap.to("#marquee img",{
            rotate:0,
        })
    }
})
// gsap.to("#marquee",{
//     delay:1,
//     duration:1,
//     transform:`translateX(-100%)`,
//     repeat:-1,
//     ease:"none"
// })

