document.addEventListener('DOMContentLoaded', function() {
    let currentUrl = window.location.pathname;

    // 设置背景图片
    let style = document.createElement("style");
    style.innerHTML = `
        /* Header 样式 */
        #header {
            height: 250px; /* 适当降低 header 高度 */
            position: relative; /* 确保内部的绝对定位生效 */
}

        /* 标题样式 */
        #header h1 {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: fantasy;
}

        /* 头像样式 */
        .avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%; /* 使头像变为圆形 */
            border: 3px solid #fff; /* 添加白色边框 */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
}

        /* 标题文字样式 */
        #header h1 a {
            margin-top: 20px; /* 头像与标题的间距 */
            color: #000;
            text-decoration: none;
            font-weight: normal;   /* 保持正常字体粗细 */
}
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
