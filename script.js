document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.querySelector('.no-btn');
  const yesBtn = document.querySelector('.yes-btn');
  let clickCount = 0;
  
  // Track the number of trials
  let trials = 0; 
  const maxTrials = 3; 

  // Handle both mouse and touch events for the "No" button
  const moveNoButton = (e) => {
    e.preventDefault();
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    clickCount++;
    trials++; // Increment trials on each attempt
    const messages = [
      "Catch me if you can! 🏃‍♀️💨",
      "Running away with your heart! 🏃‍♂️💝",
      "You can't escape love! 🦋💫",
      "Still trying to say no? 😜💖",
      "Love is chasing you! 💝🌹"
    ];
    
    if (trials <= messages.length) {
      const toast = document.createElement('div');
      toast.className = 'toast-message animate__animated animate__fadeIn';
      toast.textContent = messages[trials - 1];
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.top = '20px';
      
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.className = 'toast-message animate__animated animate__fadeOut';
        setTimeout(() => toast.remove(), 1000);
      }, 2000);
    }
    
    // After max trials, show a funny message
    if (trials === maxTrials) {
      setTimeout(() => {
        alert("You've used up all your trials! You have to say yes! 😂");
      }, 1000);
    }
  };
  
  noBtn.addEventListener('mouseover', moveNoButton);
  noBtn.addEventListener('touchstart', moveNoButton);
  
  yesBtn.addEventListener('click', () => {
    // Transform the eyes emoji into a side kiss emoji
    const eyesEmoji = document.querySelector('.eyes');
    eyesEmoji.innerHTML = '😘'; // Change to side kiss emoji

    // Create falling heart emojis
    const container = document.createElement('div');
    container.className = 'hearts-container';
    document.body.appendChild(container);
    
    const emojis = ['❤️', '💖', '💝', '💕', '💓', '🥰', '😍', '💑', '💘', '💞', '🦋', '✨', '💫'];
    const numberOfHearts = 100;
    
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
      heart.style.animationDelay = `${Math.random() * 3}s`;
      heart.style.fontSize = `${Math.random() * 20 + 20}px`;
      container.appendChild(heart);
    }
    
    // Show success message
    const message = document.createElement('div');
    message.className = 'success-message animate__animated animate__zoomIn';
    message.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem">💑</div>
      <div style="font-size: 1.5rem; margin-bottom: 1rem">
        My heart is dancing with joy! 💝
      </div>
      <div style="color: #ff4b8d; font-size: 1.2rem">
        Thank you for making me the happiest person, Njeri! 🌹
      </div>
    `;
    
    document.body.appendChild(message);
    setTimeout(() => {
      message.className = 'success-message animate__animated animate__zoomOut';
      setTimeout(() => {
        message.remove();
        container.remove();
      }, 1000);
    }, 4000);
  });
});
