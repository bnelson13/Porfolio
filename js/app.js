const welcomeLines = function() {
    var lineMaker1 = new LineMaker({
            position: 'absolute',
            lines: [
                {top: '62px', left: '10vw', width: 1, height: '189px', color: 'white', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
                {top: '251px', left: '10vw', width: '78vw', height: 1, color: 'white', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1000, direction: 'LeftRight' }},
                {top: '62px', left: '88vw', width: 1, height: '189px', color: 'white', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'BottomTop' }},
                {top: '62px', left: '10vw', width: '78vw', height: 1, color: 'white', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1000, direction: 'RightLeft' }},
                {top: 0, left: '72vw', width: 1, height: '70vh', color: 'white', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1090, direction: 'TopBottom' }},
                {top: '70vh', left: '72vw', width: '26.5vw', height: 1, color: 'white', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1000, direction: 'LeftRight' }},
            ]
    });
    
    return lineMaker1;
};

const aboutLines = function() {
    var lineMaker2 = new LineMaker({
            position: 'absolute',
            lines: [
                {top: '862px', left: '10vw', width: 1, height: '80px', color: 'black', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
                {top: '980px', left: '0', width: '500px', height: 1, color: 'black', hidden: true, animation: { duration: 500, easing: 'easeInOutSine', delay: 0, direction: 'LeftRight' }},
                {top: '980px', left: '500px', width: 1, height: '180px', color: 'black', hidden: true, animation: { duration: 500, easing: 'easeInOutSine', delay: 500, direction: 'TopBottom' }},
                {top: '1160px', left: '0', width: '500px', height: 1, color: 'black', hidden: true, animation: { duration: 500, easing: 'easeInOutSine', delay: 1000, direction: 'RightLeft' }},

                {top: '900px', left: '52vw', width: '80vw', height: 1, color: 'black', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'RightLeft' }},
                {top: '900px', left: '52vw', width: 1, height: '20px', color: 'black', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1000, direction: 'TopBottom' }},
                {top: '1525px', left: '52vw', width: 'calc(80vw-20%)', height: 1, color: 'black', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'RightLeft' }},
                {top: '1100px', left: '52vw', width: 1, height: '425px', color: 'black', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1000, direction: 'BottomTop' }},

                // {top: '1365px', left: '69.5vw', width: '30px', height: 1, color: 'black', hidden: true, animation: { duration: 400, easing: 'easeInOutSine', delay: 0, direction: 'LeftRight' }},
                // {top: '1405px', left: '69.5vw', width: '30px', height: 1, color: 'black', hidden: true, animation: { duration: 400, easing: 'easeInOutSine', delay: 400, direction: 'LeftRight' }},
                // {top: '1445px', left: '69.5vw', width: '30px', height: 1, color: 'black', hidden: true, animation: { duration: 400, easing: 'easeInOutSine', delay: 800, direction: 'LeftRight' }},
                // {top: '1485px', left: '69.5vw', width: '30px', height: 1, color: 'black', hidden: true, animation: { duration: 400, easing: 'easeInOutSine', delay: 1200, direction: 'LeftRight' }},
                // {top: '1525px', left: '69.5vw', width: '30px', height: 1, color: 'black', hidden: true, animation: { duration: 400, easing: 'easeInOutSine', delay: 1400, direction: 'LeftRight' }},
                // {top: '1565px', left: '69.5vw', width: '30px', height: 1, color: 'black', hidden: true, animation: { duration: 400, easing: 'easeInOutSine', delay: 1600, direction: 'LeftRight' }},

            ]
    });
    return lineMaker2;
};

const portfolioLines = function() {
    var lineMaker3 = new LineMaker({
            position: 'absolute',
            lines: [
                {top: '1611px', left: '10vw', width: 1, height: '80px', color: 'black', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
            ]
    });
    return lineMaker3;
};

window.addEventListener('DOMContentLoaded', (event) => {
    welcomeLines().animateLinesIn();
});

// const paper = Raphael('raphael-section-one', '100%', '100%');
// const dot = paper.circle(350,350,500).attr({
//     fill: '#FF0000',
//     stroke: '#000099',
//     "stroke-width": 3
// });

const aboutSection = document.querySelector('#about-section');
const portfolioSection = document.querySelector('#portfolio-section');
const portfolioCards = document.querySelector('.portfolio-cards')
let options = {
    root: null,
    rootMargin: "0px",
    threshold: .8
};

function drawAboutLines(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            console.log('About Entry');
            aboutLines().animateLinesIn();
        }
    });
}

function showPortfolioCards (entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            portfolioLines().animateLinesIn();
        }
        if (entry.intersectionRatio > 0.5) {
            portfolioCards.className = ('portfolio-cards-active');
        }
    });
}

const aboutObserver = new IntersectionObserver(drawAboutLines, options);
const portfolioObserver = new IntersectionObserver(showPortfolioCards, options);

aboutObserver.observe(aboutSection);
portfolioObserver.observe(portfolioSection);











//Puts all a tags with # targets in nodeList
let anchorLinks = document.querySelectorAll('a[href^="#"]')
//Iterates through each a tag
for (let anchorLink of anchorLinks) { 
    //Applies click listener on each tag and a function
    anchorLink.addEventListener('click', (e)=> {
        //Identify each links target
        let anchorValue = anchorLink.getAttribute('href')
        let anchorTarget = document.querySelector(anchorValue)
        //Uses behavior of scroll method to make it slow
        anchorTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        //Updates browswer url so it doesn't default to jumping to link
        history.pushState(null, null, anchorValue)
        //Prevents the link from functioning as normal
        e.preventDefault()
    })
}