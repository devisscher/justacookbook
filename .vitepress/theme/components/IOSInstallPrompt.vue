<template>
  <div v-if="showIOSPrompt" class="ios-install-prompt">
    <div class="ios-prompt-content">
      <div class="ios-icon">📱</div>
      <div class="ios-text">
        <h3>Install on iPhone</h3>
        <p>In <strong>Safari</strong>, tap <strong>Share</strong> <span class="share-icon">⎋</span> then <strong>Add to Home Screen</strong></p>
      </div>
      <button @click="dismiss" class="ios-dismiss-btn">Got it!</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showIOSPrompt = ref(false)

onMounted(() => {
  // Check if already dismissed or installed
  const dismissed = localStorage.getItem('ios-prompt-dismissed')
  const installed = localStorage.getItem('pwa-installed')
  
  if (dismissed || installed) {
    return
  }

  // Detect iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  
  // Check if already in standalone mode (already installed)
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       (window.navigator as any).standalone === true
  
  if (isIOS && !isStandalone) {
    // Show prompt after 7 seconds (longer than regular prompt)
    setTimeout(() => {
      showIOSPrompt.value = true
    }, 7000)
  }
})

const dismiss = () => {
  showIOSPrompt.value = false
  localStorage.setItem('ios-prompt-dismissed', Date.now().toString())
  
  // Clear dismissal after 14 days (longer than regular prompt)
  setTimeout(() => {
    localStorage.removeItem('ios-prompt-dismissed')
  }, 14 * 24 * 60 * 60 * 1000)
}
</script>

<style scoped>
.ios-install-prompt {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: calc(100% - 40px);
  z-index: 1000;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateX(-50%) translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}

.ios-prompt-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
}

.ios-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.ios-text {
  flex-grow: 1;
}

.ios-text h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.ios-text p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.share-icon {
  display: inline-block;
  font-size: 1.2em;
  vertical-align: middle;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.1em 0.3em;
  border-radius: 4px;
  margin: 0 0.2em;
}

.ios-dismiss-btn {
  flex-shrink: 0;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  white-space: nowrap;
}

.ios-dismiss-btn:hover {
  background: white;
  color: #667eea;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .ios-install-prompt {
    bottom: 10px;
    width: calc(100% - 20px);
  }

  .ios-prompt-content {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
  }

  .ios-text p {
    font-size: 0.85rem;
  }

  .ios-dismiss-btn {
    width: 100%;
  }
}
</style>

