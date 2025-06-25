var tl = gsap.timeline()
var tl2 = gsap.timeline()
tl.from("#nav", {
    y: -40,
    duration: 1,
    delay: 0.3
})
tl.from("#logo", {
    x: -180,
    duration: 1,
    delay: 0.3,

})

gsap.from("#sub-nav h3", {
    y: -40,
    duration: 1,
    delay: 2,
    stagger: 0.3
})

gsap.from(".text h3",
    {
        y: -800,
        duration: 3
    })

tl2.from("#one",
    {
        x: -500,
        duration: 2,
        scrollTrigger: {
            trigger: ".main2 #one",
            scroller: "body",
           
            start: "top 95%",
            end : "top 65% ",
            scrub:5
        }
    })
tl2.from("#two",
    {
        x: -500,
        duration: 2,
        scrollTrigger: {
            trigger: ".main2 #two",
            scroller: "body",
            start: "top 95%",
            end : "top 65% ",
            scrub:5
        }
    })
tl2.from("#three",
    {
        x: -600,
        duration: 2,
        scrollTrigger: {
            trigger: ".main2 #three",
            scroller: "body",
           
            start: "top 95%",
            end : "top 65% ",
            scrub:5
        }
    })

    // gsap.to(".image img", {
    //     width :"70%",
    //     overflow : "hidden" ,
    //     scrollTrigger:{
    //         trigger:".image",
    //         scroller: "body",
    //         start :"top 0",
    //         end : "top -120%",
    //         pin:true,
    //         scrub :1
    //     }
    // })
    gsap.to(".main3 h3", {
       transform : "translateX(-65%)"  , 
        scrollTrigger:{
            trigger:".main3",
            scroller: "body",
            start :"top 0",
            end : "top -150%",
            pin:true,
            scrub :2 ,
            delay :2 ,
            
        }
    })
    // gsap.to(".main4 h3", {
    //     x : "-59%" , 
    //      delay : 2 ,
    //      scrollTrigger:{
    //          trigger:".main3",
    //          scroller: "body",
    //          start :"top 0",
    //          end : "top -120%",
    //          pin:true,
    //          scrub :5
    //      }
    //  })
     gsap.to(".main5 h3", {
        transform : "translateX(-70%)"  , 
         delay : 2 ,
         scrollTrigger:{
             trigger:".main5",
             scroller: "body",
             start :"top 0",
             end : "top -220%",
             pin:true,
             scrub :5
         }
     })
     gsap.from(".logos" ,{
        transform : "scale(0)", 
        duration: 2 , 
        scrollTrigger: {
            trigger: ".main2 #three",
            scroller: "body",
           
            start: "top 95%",
            end : "top 65% ",
            scrub:5
        }
     })



