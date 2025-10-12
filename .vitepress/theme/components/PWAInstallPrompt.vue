<template>
  <div v-if="showPrompt" class="pwa-install-prompt">
    <div class="pwa-prompt-content">
      <div class="pwa-icon">📱</div>
      <div class="pwa-text">
        <h3>Install Just a Cookbook</h3>
        <p>Get quick access and use recipes offline!</p>
      </div>
      <div class="pwa-actions">
        <button @click="install" class="pwa-install-btn">Install</button>
        <button @click="dismiss" class="pwa-dismiss-btn">Later</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPrompt = ref(false)
let deferredPrompt = null

onMounted(() => {
  // Check if already dismissed
  const dismissed = localStorage.getItem('pwa-prompt-dismissed')
  const installed = localStorage.getItem('pwa-installed')
  
  if (dismissed || installed) {
    return
  }

  // Listen for install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    
    // Show prompt after 5 seconds
    setTimeout(() => {
      showPrompt.value = true
    }, 5000)
  })

  // Detect if app was installed
  window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa-installed', 'true')
    showPrompt.value = false
    deferredPrompt = null
  })
})

const install = async () => {
  if (!deferredPrompt) return

  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  
  if (outcome === 'accepted') {
    localStorage.setItem('pwa-installed', 'true')
  }
  
  deferredPrompt = null
  showPrompt.value = false
}

const dismiss = () => {
  showPrompt.value = false
  localStorage.setItem('pwa-prompt-dismissed', Date.now().toString())
  
  // Clear dismissal after 7 days
  setTimeout(() => {
    localStorage.removeItem('pwa-prompt-dismissed')
  }, 7 * 24 * 60 * 60 * 1000)
}
</script>

<style scoped>
.pwa-install-prompt {
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

.pwa-prompt-content {
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.pwa-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.pwa-text {
  flex-grow: 1;
}

.pwa-text h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.pwa-text p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.pwa-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.pwa-install-btn,
.pwa-dismiss-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.pwa-install-btn {
  background: var(--vp-c-brand-1);
  color: white;
}

.pwa-install-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.pwa-dismiss-btn {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.pwa-dismiss-btn:hover {
  background: var(--vp-c-bg-mute);
}

/* Mobile responsive */
@media (max-width: 640px) {
  .pwa-install-prompt {
    bottom: 10px;
    width: calc(100% - 20px);
  }

  .pwa-prompt-content {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .pwa-actions {
    width: 100%;
    justify-content: center;
  }

  .pwa-install-btn,
  .pwa-dismiss-btn {
    flex: 1;
  }
}
</style>

