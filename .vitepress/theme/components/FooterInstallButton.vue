<template>
  <span v-if="showInstallButton" class="footer-install">
    <a href="#" @click.prevent="install" class="footer-install-link">
      📲 Install App
    </a>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showInstallButton = ref(false)
let deferredPrompt = null

onMounted(() => {
  // Check if already installed
  const installed = localStorage.getItem('pwa-installed')
  
  if (installed) {
    return
  }

  // Check if running in standalone mode (already installed)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    localStorage.setItem('pwa-installed', 'true')
    return
  }

  // Listen for install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    showInstallButton.value = true
  })

  // Detect if app was installed
  window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa-installed', 'true')
    showInstallButton.value = false
    deferredPrompt = null
  })
})

const install = async () => {
  if (!deferredPrompt) {
    // Fallback for browsers that don't support beforeinstallprompt
    alert('To install:\n\nAndroid/Desktop: Look for the install icon in your browser\n\niOS: Tap Share → Add to Home Screen')
    return
  }

  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  
  if (outcome === 'accepted') {
    localStorage.setItem('pwa-installed', 'true')
  }
  
  deferredPrompt = null
  showInstallButton.value = false
}
</script>

<style scoped>
.footer-install {
  display: inline;
}

.footer-install-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  margin-left: 0.5rem;
}

.footer-install-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>

