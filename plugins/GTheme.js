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
            flex-wrap: wrap;               /* 允许子元素换行 */
            justify-content: center;       /* 一行时居中对齐 */
            align-items: center;           /* 垂直居中对齐 */
            font-family: cursive;
            font-weight: normal;           /* 确保字体不是粗体 */
            width: 100%;                   /* 确保h1的宽度占满父容器 */
            max-width: 100%;               /* 限制h1的最大宽度 */
            text-align: center;            /* 默认文本居中 */
            margin-bottom: 5px;            /* 调整这个值来设置标题和横线的距离 */
        }

        /* 如果一行放不下，标题从左边开始 */
        #header h1 span {
            display: inline-block;         /* 确保每个文字块可以独立换行 */
            text-align: left;              /* 换行时从左对齐 */
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
            margin-top: 10px; /* 头像与标题的间距 */
            color: #000;
            text-decoration: none;
            font-weight: normal;   /* 保持正常字体粗细 */
        }

        /* 背景图样式 */
        html {    
            background: url('https://cdn.jsdelivr.net/gh/co2f2e/co2f2e.github.io@main/static/images/background.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 对眼睛友好的背景色 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.84); 
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }
        /* 博客列表的背景色修改 */
        .SideNav {
            background: rgba(230, 230, 230, 0.9); /* 淡灰色，透明度稍高 */
            border-radius: 10px; /* 圆角边框 */
        }

        .SideNav-item:hover {
            background-color: #d1e8d8;  /* 柔和的浅绿色 */
            border-radius: 10px;
            transform: scale(1.04); /* 悬停时放大 */
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加轻微的悬停阴影 */
        }

        .SideNav-item {
            transition: 0.1s;
        }
    `;
    document.head.appendChild(style);
});