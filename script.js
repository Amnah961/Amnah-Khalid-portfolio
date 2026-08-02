// =====================================
// LOADER
// =====================================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

});

// =====================================
// AOS
// =====================================

AOS.init({

duration:900,

once:true,

offset:80

});

// =====================================
// TYPING EFFECT
// =====================================

new Typed(".typing",{

strings:[

"Digital Marketing Intern",

"Shopify Store Developer",

"SEO Enthusiast",

"Social Media Marketer"

],

typeSpeed:70,

backSpeed:40,

backDelay:1800,

loop:true

});

// =====================================
// MOBILE MENU
// =====================================

const menuBtn=document.getElementById("menu-btn");

const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

// =====================================
// SCROLL PROGRESS
// =====================================

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});

// =====================================
// ACTIVE NAV LINK
// =====================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});
// =====================================
// BACK TO TOP BUTTON
// =====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =====================================
// HERO ANIMATION
// =====================================

window.addEventListener("load",()=>{

    const heroContent = document.querySelector(".hero-content");

    if(heroContent){

        heroContent.style.opacity = "0";

        heroContent.style.transform = "translateY(40px)";

        setTimeout(()=>{

            heroContent.style.transition = "all 1s ease";

            heroContent.style.opacity = "1";

            heroContent.style.transform = "translateY(0)";

        },300);

    }

});


// =====================================
// FINAL CONSOLE MESSAGE
// =====================================

console.clear();

console.log(
"%cWelcome!",
"color:#b58d5a;font-size:24px;font-weight:bold;"
);

console.log(
"%cThank you for visiting my portfolio.",
"color:#555;font-size:14px;"
);

console.log(
"%cLet's build something meaningful.",
"color:#888;font-size:13px;"
);


// =====================================
// END OF FILE
// =====================================
