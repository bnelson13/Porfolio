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

/* Test for path length to determine dash array and offsest for animation*/
//console.log(document.querySelector('#path3').getTotalLength());

/* Animate SVG Lines*/
// Select all the different paths
const path1 = document.querySelector('#path1');
const path2 = document.querySelector('#path2');
const path3 = document.querySelector('#path3');
const path3B = document.querySelector('#path3B');
const path4 = document.querySelector('#path4');
const path5 = document.querySelector('#path5');
const path6 = document.querySelector('#path6');
const path7 = document.querySelector('#path7');
const path8 = document.querySelector('#path8');
const path9 = document.querySelector('#path9');
const path10 = document.querySelector('#path10');
const path11 = document.querySelector('#path11');
const path12 = document.querySelector('#path12');
const path13 = document.querySelector('#path13');
const path14 = document.querySelector('#path14');
const path15 = document.querySelector('#path15');
const path16 = document.querySelector('#path16');

// Load the welcome section paths on DOM being loaded
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.body.offsetTop;
        path3.setAttribute("class","animate-path");
        path3B.setAttribute("class","animate-path");
    }, 10);
    setTimeout(() => {
        path1.setAttribute("class","animate-path");
        path2.setAttribute("class","animate-path");
    },3000);
})
// Options for intersection observers
let options = {
    root: null,
    rootMargin: "0px",
    threshold: .8
};
let options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

// Load & remove the About Paths in or out of view
const aboutSection = document.querySelector('#about-section');
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

function removeAboutLines(entries) {
    entries.map((entry) => {
        if (!entry.isIntersecting) {
            path4.setAttribute("class","de-animate-path");
            path5.setAttribute("class","de-animate-path");
            path6.setAttribute("class","de-animate-path");
        }
    });
}
const aboutObserver2 = new IntersectionObserver(removeAboutLines, options2);
aboutObserver2.observe(aboutSection);

// Load & remove the Portfolio Paths in or out of view
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
function removePortfolioLines(entries) {
    entries.map((entry) => {
        if (!entry.isIntersecting) {
            path7.setAttribute("class","de-animate-path");
            path8.setAttribute("class","de-animate-path");
        }
    });
}
const portfolioObserver2 = new IntersectionObserver(removePortfolioLines, options2);
portfolioObserver2.observe(portfolioSection);

// Load & remove the Resume Paths in or out of view
const resumeSection = document.querySelector('#resume-section');
function drawResumeLines(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            path9.setAttribute("class","animate-path");
            path16.setAttribute("class","animate-path");
            setTimeout(() => {
                path15.setAttribute("class","animate-path");
            }, 300);
            setTimeout(() => {
                path14.setAttribute("class","animate-path");
            }, 600);
            setTimeout(() => {
                path13.setAttribute("class","animate-path");
            }, 900);
            setTimeout(() => {
                path12.setAttribute("class","animate-path");
            }, 1200);
            setTimeout(() => {
                path11.setAttribute("class","animate-path");
            }, 1500);
            setTimeout(() => {
                path10.setAttribute("class","animate-path");
            }, 2000);
        }
    });
}

function removeResumeLines(entries) {
    entries.map((entry) => {
        if (!entry.isIntersecting) {
            path9.setAttribute("class","de-animate-path");
            path10.setAttribute("class","de-animate-path");
            path11.setAttribute("class","de-animate-path");
            path12.setAttribute("class","de-animate-path");
            path13.setAttribute("class","de-animate-path");
            path14.setAttribute("class","de-animate-path");
            path15.setAttribute("class","de-animate-path");
            path16.setAttribute("class","de-animate-path");
        }
    });
}

const resumeObserver = new IntersectionObserver(drawResumeLines, options);
resumeObserver.observe(resumeSection);
const resumeObserver2 = new IntersectionObserver(removeResumeLines, options2);
resumeObserver2.observe(resumeSection);


/* Dynamic Media Queries */
let resumeHolds = document.querySelectorAll('.resume-hold');
let resumeEntries = document.querySelectorAll('.resume-entry');
let workEntries = document.querySelectorAll('.resume-work');
let educEntries = document.querySelectorAll('.resume-educ');
let resumeIcons = document.querySelectorAll('.resume-icon');

function narrowResume(x) {
    //Smaller than 967 Px
    if (x.matches) {
        for (i = 0; i < 7; i++) {
            resumeHolds[i].style.display='none';
            resumeIcons[i].style.display='block';
        }
        for (i = 0; i < 3; i++) {
            workEntries[i].style.textAlign='start';
            workEntries[i].style.margin='30px 0 0 30%';
        }
        for (i = 0; i < 11; i++) {
            educEntries[i].style.margin='30px 0 0 30%';
        }
        document.querySelector('.resume-sheet').style.gridTemplateColumns = '1fr'
    } else {
        for (i = 0; i < 7; i++) {
            resumeHolds[i].style.display='block';
            resumeIcons[i].style.display='none';
        }
        for (i = 0; i < 3; i++) {
            workEntries[i].style.textAlign='end';
            workEntries[i].style.margin='30px 50px 0 0';
        }
        for (i = 0; i < 11; i++) {
            educEntries[i].style.margin='30px 0 0 50px';
        }
        document.querySelector('.resume-sheet').style.gridTemplateColumns = '1fr 1fr'
    }
  }
  
  var narWidthOne = window.matchMedia("(max-width: 967px)")

  // Call listener function at run time
  narrowResume(narWidthOne)

  // Attach listener function on state changes
  narWidthOne.addListener(narrowResume)