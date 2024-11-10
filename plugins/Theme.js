document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

    let style = document.createElement("style");
    style.innerHTML = `
    html {    
        background: url('https://cdn.jsdelivr.net/gh/co2f2e/co2f2e.github.io@main/static/images/background.webp') no-repeat center center fixed;
        background-size: cover;
    }

    body {
        background: rgba(237, 239, 233, 0.84); 
    }
    `;
    document.head.appendChild(style);
});
