function loadResource(type, attributes) {
    if (type === 'style') {
        const style = document.createElement('style');
        style.textContent = attributes.css;
        document.head.appendChild(style);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const css = `
        :root {
            --toc-bg: rgba(237, 239, 233, 0.84);
            --toc-border: #e1e4e8;
            --toc-text: #24292e;
            --toc-hover: #8ae9c4;
            --toc-icon-bg: #fff;
            --toc-icon-color: #ad6598;
            --toc-icon-active-bg: #813c85;
            --toc-icon-active-color: #fff;
        }

        /* 右下角回到顶部按钮样式 */
        .toc-end {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid var(--toc-icon-color);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-size: 18px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
            z-index: 1002;
        }

        /* 进度条样式 */
        .toc-end .progress-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: conic-gradient(#8ae9c4 0%, #8ae9c4 0%);
            transform: rotate(-90deg); /* 让进度条从顶部开始 */
        }

        /* 进度条外圈 */
        .toc-end .progress-ring:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #e1e4e8;
            box-sizing: border-box;
        }

        .toc-end .icon {
            position: absolute;
            z-index: 1;
        }
    `;
    loadResource('style', {css: css});

    // Create the back-to-top button with progress ring
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'toc-end';
    const progressRing = document.createElement('div');
    progressRing.className = 'progress-ring';
    backToTopButton.appendChild(progressRing);
    
    const icon = document.createElement('span');
    icon.className = 'icon';
    icon.textContent = '↑';
    backToTopButton.appendChild(icon);

    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(backToTopButton);

    // Function to update the progress ring based on scroll position
    function updateProgressRing() {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = document.documentElement.scrollTop;
        const progress = (scrollPosition / docHeight) * 100;
        
        // Update the progress-ring with the current scroll percentage
        progressRing.style.background = `conic-gradient(#8ae9c4 ${progress}%, #e1e4e8 ${progress}%)`;
    }

    window.onscroll = function() {
        updateProgressRing();
        const backToTopButton = document.querySelector('.toc-end');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "flex"; // Show button when scrolling
        } else {
            backToTopButton.style.display = "none";  // Hide button when at the top
        }
    };
});
