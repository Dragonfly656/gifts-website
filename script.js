// wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // Popup close button
  const closeBtn = document.getElementById('close-btn');
  const popup = document.getElementById('message-popup');
  if(closeBtn && popup){
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    // click overlay to close
    popup.addEventListener('click', (e) => { if (e.target === popup) popup.style.display = 'none'; });
  }

  // Show popup (remove or change delay if you want)
  if(popup) popup.style.display = 'flex';

  // Music play button
  const playBtn = document.getElementById('play-music');
  const audio = document.getElementById('bgMusic');
  if(playBtn && audio){
    playBtn.addEventListener('click', () => {
      audio.play().catch(()=>{}); // catch autoplay rejection silently
    });
  }

  // Falling hearts
  const HEARTS_PER_SECOND = 2; // lower = fewer hearts
  const INTERVAL_MS = 1000 / HEARTS_PER_SECOND;
  function createHeart(){
    const heart = document.createElement('div');
    heart.className = 'heart';
    const emojis = ['💖','❤️','💕','💘','💞'];
    heart.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    heart.style.left = (Math.random()*90 + 2) + 'vw';
    heart.style.fontSize = (18 + Math.random()*30) + 'px';
    const duration = (3 + Math.random()*3); // 3 - 6s
    heart.style.animation = `fall ${duration}s linear forwards`;
    document.body.appendChild(heart);
    heart.addEventListener('animationend', ()=> heart.remove());
  }
  setInterval(createHeart, INTERVAL_MS);
});

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closePopup");

    // Show popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "flex";
    }, 2000);

    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });
});

