document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

    // 创建样式
    let style = document.createElement("style");
    style.innerHTML = `
    html {    
        background: url('https://blog.freeblock.cn/background.webp') no-repeat center center fixed;
        background-size: cover;
    }

    body {
        background: rgba(237, 239, 233, 0.84); 
    }
    `;
    document.head.appendChild(style);
});
