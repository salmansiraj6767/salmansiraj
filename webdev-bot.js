// Web Development Bot Logic
const webdevBotAvatar = document.getElementById('webdev-bot-avatar');
const webdevBotChat = document.getElementById('webdev-bot-chat');
const webdevBotCloseBtn = document.getElementById('webdev-bot-close-btn');
const webdevBotMessages = document.getElementById('webdev-bot-messages');
const webdevBotInputForm = document.getElementById('webdev-bot-input-form');
const webdevBotUserInput = document.getElementById('webdev-bot-user-input');

// Open chat on avatar click
webdevBotAvatar.addEventListener('click', () => {
    webdevBotChat.classList.remove('hidden');
    setTimeout(() => webdevBotUserInput.focus(), 200);
    if (webdevBotMessages.childElementCount === 0) {
        webdevBotSendMessage("Hi! 👋 I'm your cartoon bot. How can I help you with web development today?\n- Need a website or landing page?\n- Want to improve your UI/UX?\n- Or just want to say hi?");
    }
});

// Close chat
webdevBotCloseBtn.addEventListener('click', () => {
    webdevBotChat.classList.add('hidden');
});

// Handle user input
webdevBotInputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMsg = webdevBotUserInput.value.trim();
    if (!userMsg) return;
    webdevAddMessage(userMsg, 'user');
    webdevBotUserInput.value = '';
    setTimeout(() => handleWebdevBotReply(userMsg), 600);
});

function webdevAddMessage(text, sender) {
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
    webdevBotMessages.appendChild(msgDiv);
    webdevBotMessages.scrollTop = webdevBotMessages.scrollHeight;
}

function webdevBotSendMessage(text) {
    webdevAddMessage(text, 'bot');
}

function handleWebdevBotReply(userMsg) {
    const msg = userMsg.toLowerCase();
    if (msg.includes('website') || msg.includes('web development') || msg.includes('portfolio')) {
        webdevBotSendMessage("I can help you build a modern, responsive website or portfolio! Ask me about landing pages, business sites, or personal portfolios.");
    } else if (msg.includes('landing page')) {
        webdevBotSendMessage("Landing pages are my specialty! I create high-converting, fast, and beautiful landing pages for any purpose.");
    } else if (msg.includes('e-commerce') || msg.includes('store')) {
        webdevBotSendMessage("I design e-commerce front-ends (Shopify, WooCommerce, custom) — UI/UX only, no backend/payment integration. Want to know more?");
    } else if (msg.includes('web app')) {
        webdevBotSendMessage("I build interactive web app UIs (React, dashboards, SPAs). I focus on the front-end only, no backend logic or database.");
    } else if (msg.includes('react') || msg.includes('html') || msg.includes('css') || msg.includes('javascript')) {
        webdevBotSendMessage("I use modern front-end technologies like React, HTML5, CSS3, and JavaScript to build fast, beautiful sites.");
    } else if (msg.includes('contact') || msg.includes('email')) {
        webdevBotSendMessage("You can contact me at salmansirajeditor@gmail.com or use the contact form below!");
    } else if (msg.includes('hi') || msg.includes('hello')) {
        webdevBotSendMessage("Hello there! 😊 How can I assist you with your web project today?");
    } else if (msg.includes('services') || msg.includes('offer')) {
        webdevBotSendMessage("I offer custom websites, landing pages, e-commerce UI, and web app UI. Check out the 'Service Offers' section for details!");
    } else {
        webdevBotSendMessage("I'm here to help with web development, UI/UX, and front-end projects. Ask me anything about building your website!");
    }
}

// Show greeting as soon as the website loads
window.addEventListener('DOMContentLoaded', () => {
    if (webdevBotMessages.childElementCount === 0) {
        webdevBotSendMessage("Hi! 👋 I'm your cartoon bot. How can I help you with web development today?\n- Need a website or landing page?\n- Want to improve your UI/UX?\n- Or just want to say hi?");
    }
}); 