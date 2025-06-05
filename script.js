// 平滑滚动
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 导航栏高亮
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// 滚动动画
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.timeline-item, .photo-item, .promise-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// 浮动爱心动画
function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 4s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// 添加浮动爱心CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 点击效果
function addClickEffect(element) {
    element.addEventListener('click', function(e) {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600);
    });
}

// 打字机效果
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 照片悬停效果
function addPhotoHoverEffect() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 承诺卡片点击效果
function addPromiseCardEffect() {
    const promiseCards = document.querySelectorAll('.promise-card');
    
    promiseCards.forEach(card => {
        addClickEffect(card);
        
        card.addEventListener('click', function() {
            // 创建爱心效果
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createFloatingHeart();
                }, i * 100);
            }
        });
    });
}

// 导航栏点击事件
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// 情书打字机效果
function startLoveLetterTypewriter() {
    const letterContent = document.querySelector('.letter-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const paragraphs = entry.target.querySelectorAll('p');
                paragraphs.forEach((p, index) => {
                    setTimeout(() => {
                        const originalText = p.textContent;
                        typeWriter(p, originalText, 30);
                    }, index * 1000);
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (letterContent) {
        observer.observe(letterContent);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置导航
    setupNavigation();
    
    // 添加滚动事件监听
    window.addEventListener('scroll', function() {
        updateActiveNav();
        handleScrollAnimations();
    });
    
    // 初始化动画
    handleScrollAnimations();
    
    // 添加照片悬停效果
    addPhotoHoverEffect();
    
    // 添加承诺卡片效果
    addPromiseCardEffect();
    
    // 启动情书打字机效果
    startLoveLetterTypewriter();
    
    // 定期创建浮动爱心
    setInterval(createFloatingHeart, 3000);
    
    // 为CTA按钮添加点击效果
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        addClickEffect(ctaButton);
    }
    
    // 为时间轴项目添加fade-in类
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('fade-in');
    });
    
    // 为照片项目添加fade-in类
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.classList.add('fade-in');
    });
    
    // 为承诺卡片添加fade-in类
    const promiseCards = document.querySelectorAll('.promise-card');
    promiseCards.forEach(card => {
        card.classList.add('fade-in');
    });
});

// 窗口调整大小时重新计算动画
window.addEventListener('resize', function() {
    handleScrollAnimations();
});

// 添加一些额外的交互效果
document.addEventListener('click', function(e) {
    // 随机在点击位置创建爱心
    if (Math.random() < 0.3) {
        const heart = document.createElement('span');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '16px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'fadeOutUp 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});

// 添加fadeOutUp动画
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    @keyframes fadeOutUp {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
`;
document.head.appendChild(additionalStyle);