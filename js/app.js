(function() {
    var lineMaker = new LineMaker({
            position: 'fixed',
            lines: [
                {top: 0, left: '10vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
                {top: 0, left: '20vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'TopBottom' }},
                {top: 0, left: '30vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' }},
                {top: 0, left: '40vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'TopBottom' }},
                {top: 0, left: '50vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'TopBottom' }},
                {top: 0, left: '60vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'TopBottom' }},
                {top: 0, left: '70vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'TopBottom' }},
                {top: 0, left: '80vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'TopBottom' }},
                {top: 0, left: '90vw', width: 1, height: '100%', color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' }},
                {top: '10vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'LeftRight' }},
                {top: '20vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'LeftRight' }},
                {top: '30vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'LeftRight' }},
                {top: '40vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'LeftRight' }},
                {top: '50vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'LeftRight' }},
                {top: '60vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'LeftRight' }},
                {top: '70vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'LeftRight' }},
                {top: '80vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'LeftRight' }},
                {top: '90vh', left: 0, width: '100%', height: 1, color: '#7599E4', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 180, direction: 'LeftRight' }}
            ]
    });
    
    setTimeout(function() {
        lineMaker.animateLinesIn();
    }, 500);
})();