/* Slow scroll to internal links */
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

/* Button to go Back to Top of page */
//Set button from div
topButton = document.querySelector('.topButton');
// If page is scrolled down 20 then button will appear
const showButton = function() {
    let y = window.scrollY;
    if (y>20) {
        topButton.setAttribute('class', 'topButtonActive');
    } else {
        topButton.setAttribute('class', 'topButton');
    }
}
// Shows button when page is scrolled
window.addEventListener('scroll', showButton);
// Scroll back to top slowly when button is pressed
topButton.addEventListener('click', function (e) {
    e.preventDefault();
    //Slow scrolls back to top
    const scrollUp = function () {
        const yVal = document.documentElement.scrollTop || document.body.scrollTop;
        if (yVal > 0) {
            window.requestAnimationFrame(scrollUp);
            window.scrollTo(0, yVal - yVal / 10);
        }
    }
    scrollUp();
})

/* Show Clipboard tip in Contact Section */
//Get clipboard icons and Copy to Clipboard words
const emailClip = document.querySelector('#clipboard-icon-email')
const emailClipWord = document.querySelector('#clipboard-email-words')

const emailText = document.querySelector('#emailLink')

// Set up On Mouse Over events
emailClip.addEventListener('mouseover', function(event) {
    emailClipWord.className = ('clipboard-words-active');
});

// Set up On Mouse Out events
emailClip.addEventListener('mouseout', function(event) {
    emailClipWord.className = ('clipboard-words');
});

// Set up On Mouse Click events
emailClip.addEventListener('click', function(event) {
    let temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value= emailText.innerText
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    emailClipWord.style.color = 'green';
    setTimeout(function() {
        emailClipWord.style.color = 'black';
    }, 1000);
})

// console.log(document.querySelector('#path4').getTotalLength());
/* Animate SVG Lines*/
// Select all the different paths
const path1 = document.querySelector('#path1');
const path2 = document.querySelector('#path2');
const path3 = document.querySelector('#path3');
const path4 = document.querySelector('#path4');
const path5 = document.querySelector('#path5');
const path6 = document.querySelector('#path6');
const path7 = document.querySelector('#path7');
const path8 = document.querySelector('#path8');
const path9 = document.querySelector('#path9');
const path10 = document.querySelector('#path10');
const path11 = document.querySelector('#path11');
const path12 = document.querySelector('#path12');

console.log(path9.getTotalLength());

// Load the welcome section paths on DOM being loaded
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.body.offsetTop;
        path1.setAttribute("class","animate-path");
        path2.setAttribute("class","animate-path");
        path3.setAttribute("class","animate-path");
        path9.setAttribute("class","animate-path-2");
        path10.setAttribute("class","animate-path-2");
        path11.setAttribute("class","animate-path-2");
        path12.setAttribute("class","animate-path-2");
    }, 10);
})

// Load the About Paths when scrolled to
const aboutSection = document.querySelector('#about-section');
let options = {
    root: null,
    rootMargin: "0px",
    threshold: .8
};
function drawAboutLines(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            path4.setAttribute("class","animate-path");
            path5.setAttribute("class","animate-path");
            path6.setAttribute("class","animate-path");
        }
    });
}
const aboutObserver = new IntersectionObserver(drawAboutLines, options);
aboutObserver.observe(aboutSection);

// Load the Portofolio Paths when scrolled to
const portfolioSection = document.querySelector('#portfolio-section');
function drawPortfolioLines(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            path7.setAttribute("class","animate-path");
            path8.setAttribute("class","animate-path");
        }
    });
}
const portfolioObserver = new IntersectionObserver(drawPortfolioLines, options);
portfolioObserver.observe(portfolioSection);