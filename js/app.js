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