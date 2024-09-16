// const allinks = document.querySelectorAll("a:link");
//    console.log(allinks);
// allinks.forEach(function(link){

//     link.addEventListener("click", function(e){
//         e.preventDefault();
//         const href = link.getAttribute("href");
     

//         if (href === "#") 
//             window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//             });

            
//     });
        
// });


const btnNav = document.querySelector(".btn-mobile-nav");
const headerel = document.querySelector(".header");

btnNav.addEventListener("click",function () {
        headerel.classList.toggle('nav-open')
});




const allinks = document.querySelectorAll('a:link');
allinks.forEach(function (link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');

        if(href === '#')
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            });
        
        if(href !== '#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:'smooth'});
            console.log(sectionEl);
        }
    });
});


const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent  = entries[0]
        
        if(ent.isIntersecting === false){
            document.body.classList.add("sticky");
        }

         if(ent.isIntersecting === true){
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold:0,
        rootMargin:"-80px",
    }
);
obs.observe(sectionHero);