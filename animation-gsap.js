gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById("skills-section");
const items = document.querySelectorAll(".progress-item");

// animation entrée
ScrollTrigger.create({
    trigger:section,
    start:"top 50%",
    end:"bottom 20%",
    onEnter: () => animateSection(true),
    onLeaveBack: () => animateSection(false),
    toggleActions:"play none none reverse",
    scrub:true
});

function animateSection(show){
    if(show){
        gsap.to(section,{
            opacity:1,
            scale:1,
            y:0,
            duration:0.6,
            ease:"power2.out"
        });

        const colors =["#00bfff"];

        // lancer l'animation des cercles
        items.forEach((item, index )=> {
            const circle = item.querySelector(".circle");
            const valueText = item.querySelector(".value");
            const percent = parseInt(item.getAttribute("data-percentage"));
            const color = colors[index%colors.length];

            let current = 0;

            valueText.textContent ="0%";
            circle.style.background=`conic-gradient(${color} 0% 0%, #eee 0% 100%)`;

            const interval = setInterval(()=>{
                if (current<=percent){
                    circle.style.background=`conic-gradient(${color} 0% ${current}%, #eee ${current}% 100%)`;
                    valueText.textContent=current+ "%";
                    current++;
                }else{
                    clearInterval(interval);
                }
            }, 10);
            
        });
    }else{
        gsap.to(section,{
            opacity:0,
            scale:0.8,
            duration:0.4,
            ease:"power2.in"
        });

        // réinitialise les cercles 
        items.forEach((item,index) =>{
            const circle = item.querySelector(".circle");
            const valueText = item.querySelector(".value");
            const color = colors[index % colors.length];
            valueText.textContent ="0%";
            circle.style.background=`conic-gradient(${color} 0% 0%, #eee 0% 100%)`;


        });
    }
}

gsap.to(".box",{
    x:0,
    opacity:1,
    duration:1,
    ease:"power3.out",
    scrollTrigger:{
        trigger:"#proj",
        start:"top 80%",
        
        toggleActions:"play none none none",
        scrub:true
    }
});

