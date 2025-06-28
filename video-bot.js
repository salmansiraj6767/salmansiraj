// Video Editing & YouTube Automation Bot Logic
const videoBotAvatar = document.getElementById('video-bot-avatar');
const videoBotChat = document.getElementById('video-bot-chat');
const videoBotCloseBtn = document.getElementById('video-bot-close-btn');
const videoBotMessages = document.getElementById('video-bot-messages');
const videoBotInputForm = document.getElementById('video-bot-input-form');
const videoBotUserInput = document.getElementById('video-bot-user-input');

// Open chat on avatar click
videoBotAvatar.addEventListener('click', () => {
    videoBotChat.classList.remove('hidden');
    setTimeout(() => videoBotUserInput.focus(), 200);
    if (videoBotMessages.childElementCount === 0) {
        videoBotSendMessage("Hi! 👋 I'm your cartoon bot. What brings you here today?\n- Need help with video editing?\n- Want to know about YouTube automation?\n- Or just want to say hi?");
    }
});

// Close chat
videoBotCloseBtn.addEventListener('click', () => {
    videoBotChat.classList.add('hidden');
});

// Handle user input
videoBotInputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMsg = videoBotUserInput.value.trim();
    if (!userMsg) return;
    videoAddMessage(userMsg, 'user');
    videoBotUserInput.value = '';
    setTimeout(() => handleVideoBotReply(userMsg), 600);
});

function videoAddMessage(text, sender) {
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
    videoBotMessages.appendChild(msgDiv);
    videoBotMessages.scrollTop = videoBotMessages.scrollHeight;
}

function videoBotSendMessage(text) {
    videoAddMessage(text, 'bot');
}

function handleVideoBotReply(userMsg) {
    const msg = userMsg.toLowerCase();
    if (msg.includes('edit') || msg.includes('video')) {
        videoBotSendMessage("I offer professional video editing for YouTube, vlogs, ads, and more! Ask me about color grading, transitions, or effects.");
    } else if (msg.includes('automation') || msg.includes('manage') || msg.includes('channel')) {
        videoBotSendMessage("I can automate your YouTube channel: uploads, scheduling, SEO, analytics, and more. Want to know how?");
    } else if (msg.includes('voiceover') || msg.includes('audio')) {
        videoBotSendMessage("I provide high-quality voiceovers, background music, and perfect audio-video sync for your content.");
    } else if (msg.includes('growth') || msg.includes('consult')) {
        videoBotSendMessage("I offer channel growth consulting: strategies to boost subscribers, watch time, and engagement.");
    } else if (msg.includes('contact') || msg.includes('email')) {
        videoBotSendMessage("You can contact me at salmansirajeditor@gmail.com or use the contact form below!");
    } else if (msg.includes('hi') || msg.includes('hello')) {
        videoBotSendMessage("Hello there! 😊 How can I assist you with your video or channel today?");
    } else if (msg.includes('services') || msg.includes('offer')) {
        videoBotSendMessage("I offer video editing, channel automation, voiceover, and more. Check out the 'Service Offers' section for details!");
    } else {
        videoBotSendMessage("I'm here to help with video editing, YouTube automation, and channel growth. Ask me anything!");
    }
}

// Show greeting as soon as the website loads
window.addEventListener('DOMContentLoaded', () => {
    if (videoBotMessages.childElementCount === 0) {
        videoBotSendMessage("Hi! 👋 I'm your cartoon bot. What brings you here today?\n- Need help with video editing?\n- Want to know about YouTube automation?\n- Or just want to say hi?");
    }
}); 