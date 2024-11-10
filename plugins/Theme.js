document.addEventListener('DOMContentLoaded', function() {
    let currentUrl = window.location.pathname;

    // 设置背景图片
    let style = document.createElement("style");
    style.innerHTML = `
        html {    
            background: url('https://cdn.jsdelivr.net/gh/co2f2e/co2f2e.github.io@main/static/images/background.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 博客列表悬停放大效果 */
        .SideNav {
            background: rgba(255, 255, 255, 0.6); /* 白色背景，透明度60% */
            border-radius: 10px; /* 圆角边框 */
        }

        .SideNav-item:hover {
            background-color: #c3e4e3;
            border-radius: 10px;
            transform: scale(1.04); /* 悬停时放大 */
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* 添加悬停阴影 */
        }

        .SideNav-item {
            transition: 0.1s;
        }
    `;
    document.head.appendChild(style);
});
