
document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.querySelector('input-selector');
    
    if (messageInput) {
      messageInput.addEventListener('focus', () => {
        // Show AI Icon logic here
        const aiIcon = document.createElement('img');
        aiIcon.src = chrome.runtime.getURL('/assets/ai-icon.svg');
        aiIcon.style.position = 'absolute';
        aiIcon.style.right = '10px';
        aiIcon.style.bottom = '10px';
        messageInput.parentElement.appendChild(aiIcon);
      });
  
      messageInput.addEventListener('blur', () => {
        // Hide AI Icon logic here
        const aiIcon = document.querySelector('img[src*="ai-icon"]');
        if (aiIcon) {
          aiIcon.remove();
        }
      });
    }
  });
  