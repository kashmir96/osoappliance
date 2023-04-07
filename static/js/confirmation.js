//!-- Google Tracking Tags -->
// Google tag (gtag.js)
var gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11064141022';
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-11064141022');

// Google Event snippet for Begin Checkout conversion page
gtag('event', 'conversion', {'send_to': 'AW-11064141022/sur-COeN_5UYEN7J5Zsp'});

// Fathom event 
window.addEventListener('load', (event) => {
    fathom.trackGoal('6PX4Y5YF', 6200);
});