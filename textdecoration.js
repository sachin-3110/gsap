function breakTheText(){
    var h1 = document.querySelector("h1")
var h1Text = h1.textContent
var splittedText = h1Text.split("")

var clutter = ""

var halfText = splittedText.length/2



// forEach runs loop on the basis of lenght of the array splitted up side^^^^
splittedText.forEach(function(elem,idx){
    if(idx>=halfText){
        clutter +=`<span class="leftText">${elem}</span>`
            }
    else{clutter +=`<span class="rightText">${elem}</span>`
}
h1.innerHTML=clutter
})
}

var tl=gsap.timeline()
breakTheText()


function textdec(){
    gsap.from("h1 .rightText",{
        duration:0.5,
        y:100,
        stagger:0.25,
        opacity:0
    })
    gsap.from("h1 .leftText",{
        // delay:0.2,
        y:100,
        duration:0.2,
        stagger:-0.25,
        opacity:0
    })
}
textdec()