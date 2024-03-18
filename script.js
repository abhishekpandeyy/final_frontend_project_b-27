// alert("js check!")
//red ,orange , purpe-green and uske neeche ke teen lines delete kr do.

function loco_gsap() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.02,
    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform? "transform"
      : "fixed"*/
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
loco_gsap();

gsap.from('.page-1 .page-1-h1-wrap h1', {
  opacity: 0,
  delay: .2,
  y: 600,
  stagger: .2,
  duration: .8,
})

let spn1=document.querySelector('.page-2-btn span')
let btn1=document.querySelector('.page-2-btn');
btn1.addEventListener('mouseenter',()=>{
    spn1.style.scale='100';
    spn1.style.transition='all linear .7s';
   
})
btn1.addEventListener('mouseleave',()=>{
  spn1.style.scale='1';
  spn1.style.transition='all linear .3s';
 
})

let cardContainer=document.querySelector('.cards-container');

