function checkDomainAge() {
    const domain = document.getElementById('domain').value;

    if (domain) {
        const domainAge = getDomainAge(domain);
        if (domainAge !== "unknown") {
            document.getElementById('domainAgeResult').innerText = `Domain age for ${domain} is approximately ${domainAge} years.`;
        } else {
            document.getElementById('domainAgeResult').innerText = `Domain age for ${domain} is unknown.`;
        }
    } else {
        document.getElementById('domainAgeResult').innerText = 'Please enter a domain name.';
    }
}

function getDomainAge(domain) {
    const mockDomainAges = {
        "example.com": 23,
        "test.com": 21,
        "demo.com": 19,
        "google.com": 24,
        "yahoo.com": 27,
        "bing.com": 22,
        "duckduckgo.com": 14,
        "baidu.com": 21,
        "yandex.com": 24,
        "msn.com": 26,
        "ask.com": 25,
        "wikipedia.org": 20,
        "amazon.com": 27,
        "ebay.com": 26,
        "apple.com": 28,
        "facebook.com": 18,
        "twitter.com": 16,
        "instagram.com": 12,
        "linkedin.com": 19,
        "wordpress.com": 18,
        "reddit.com": 17,
        "stackoverflow.com": 14,
        // Add more domains and ages as needed
    };
    return mockDomainAges[domain.toLowerCase()] || "unknown";
}
