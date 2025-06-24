// Navbar menu toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll-triggered animations
const animatedSections = document.querySelectorAll('.hero, .designer-section, .digital-section, .footer-cta');

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'none';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(40px)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Scroll-triggered animation for all .animated elements
function revealOnScroll() {
    const animatedEls = document.querySelectorAll('.animated');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.15 });
    animatedEls.forEach(el => observer.observe(el));
}
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Cartoon Bot Chat Logic
const botAvatar = document.getElementById('cartoon-bot-avatar');
const botChat = document.getElementById('cartoon-bot-chat');
const botCloseBtn = document.getElementById('bot-close-btn');
const botMessages = document.getElementById('bot-messages');
const botInputForm = document.getElementById('bot-input-form');
const botUserInput = document.getElementById('bot-user-input');

// Open chat on avatar click
botAvatar.addEventListener('click', () => {
    botChat.classList.remove('hidden');
    setTimeout(() => botUserInput.focus(), 200);
    if (botMessages.childElementCount === 0) {
        botSendMessage("Hi! 👋 I'm your bot. What brings you here today?\n- Need help with video editing?\n- Want to know about YouTube automation?\n- Or just want to say hi?");
    }
});

// Close chat
botCloseBtn.addEventListener('click', () => {
    botChat.classList.add('hidden');
});

// Handle user input
botInputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMsg = botUserInput.value.trim();
    if (!userMsg) return;
    addMessage(userMsg, 'user');
    botUserInput.value = '';
    setTimeout(() => handleBotReply(userMsg), 600);
});

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'bot' ? 'bot-message' : 'user-message';
    if (sender === 'bot') {
        const avatar = document.createElement('span');
        avatar.className = 'bot-avatar';
        msgDiv.appendChild(avatar);
    }
    const textDiv = document.createElement('span');
    textDiv.className = 'message-text';
    textDiv.textContent = text;
    msgDiv.appendChild(textDiv);
    botMessages.appendChild(msgDiv);
    botMessages.scrollTop = botMessages.scrollHeight;
}

function botSendMessage(text) {
    addMessage(text, 'bot');
}

function handleBotReply(userMsg) {
    const msg = userMsg.toLowerCase();
    if (msg.includes('website') || msg.includes('web development') || msg.includes('portfolio')) {
        botSendMessage("I can help you build a modern, responsive website or portfolio! Ask me about landing pages, business sites, or personal portfolios.");
    } else if (msg.includes('landing page')) {
        botSendMessage("Landing pages are my specialty! I create high-converting, fast, and beautiful landing pages for any purpose.");
    } else if (msg.includes('e-commerce') || msg.includes('store')) {
        botSendMessage("I design e-commerce front-ends (Shopify, WooCommerce, custom) — UI/UX only, no backend/payment integration. Want to know more?");
    } else if (msg.includes('web app')) {
        botSendMessage("I build interactive web app UIs (React, dashboards, SPAs). I focus on the front-end only, no backend logic or database.");
    } else if (msg.includes('react') || msg.includes('html') || msg.includes('css') || msg.includes('javascript')) {
        botSendMessage("I use modern front-end technologies like React, HTML5, CSS3, and JavaScript to build fast, beautiful sites.");
    } else if (msg.includes('contact') || msg.includes('email')) {
        botSendMessage("You can contact me at salmansirajeditor@gmail.com or use the contact form below!");
    } else if (msg.includes('hi') || msg.includes('hello')) {
        botSendMessage("Hello there! 😊 How can I assist you with your web project today?");
    } else if (msg.includes('services') || msg.includes('offer')) {
        botSendMessage("I offer custom websites, landing pages, e-commerce UI, and web app UI. Check out the 'Service Offers' section for details!");
    } else {
        botSendMessage("I'm here to help with web development, UI/UX, and front-end projects. Ask me anything about building your website!");
    }
}

// Show greeting as soon as the website loads
window.addEventListener('DOMContentLoaded', () => {
    if (botMessages.childElementCount === 0) {
        let greeting = "";
        if (location.pathname.includes("video-editing-youtube-automation")) {
            greeting = "Hi! 👋 I'm your cartoon bot. What brings you here today?\n- Need help with video editing?\n- Want to know about YouTube automation?\n- Or just want to say hi?";
        } else {
            greeting = "Hi! 👋 I'm your cartoon bot. How can I help you with web development today?\n- Need a website or landing page?\n- Want to improve your UI/UX?\n- Or just want to say hi?";
        }
        botSendMessage(greeting);
    }
});

// Service Offers Tab Switching
window.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.service-tab');
    const tabContents = document.querySelectorAll('.service-offers-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.getAttribute('data-tab-content') === tabName) {
                    content.style.display = '';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
}); 