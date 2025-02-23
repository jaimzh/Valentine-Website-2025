

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "You make my heart skip a beat! 💓",
        "You're the sweetest valentine! 🍫",
        "Every day is special with you! ✨",
        "You're my favorite person!, even when you're feisty or ignore me 😋",
        "You make me smile! 😊",
        "You make doing all this worth it, trust me i wouldn't do this for anyone else but you 🥰",
        "Sweeter than chocolate! 🍫",
        "My favorite notification! 📱",
        "You had me at hello! 👋",
        "Best part of my day! 🌟",
        "I don't get paid enough for this but i did it anyway cause you're worth it 🙂‍↕️",
        "Screenshot and show me this whenever you want icecream🍦",
        "You're the best thing that's ever happened to me! 💕",
        "Do you want something from Glovo?🍔",
        "You're so close to get a new phone, keep it up!(That's a joke, please don't keep it up) 📱",
    
    ];


    const giftContainer = document.querySelector('.gift-container');
    const messageContainer = document.querySelector('.message-container');
    const messageText = document.querySelector('.message-text');
    const retryButton = document.querySelector('.retry-button');

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }

    function getRandomMessage() {
        return messages[Math.floor(Math.random() * messages.length)];
    }

    function openGift() {
        if (!giftContainer.classList.contains('open')) {
            giftContainer.classList.add('open', 'show-message');
            messageText.textContent = getRandomMessage();
            
            const heartInterval = setInterval(createHeart, 200);
            setTimeout(() => clearInterval(heartInterval), 3000);
        }
    }

    function resetGift(e) {
        e.stopPropagation();
        giftContainer.classList.remove('open', 'show-message');
    }

    giftContainer.addEventListener('click', openGift);
    retryButton.addEventListener('click', resetGift);
});