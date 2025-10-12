<template>
  <div class="custom-footer">
    <p class="footer-message" v-html="message"></p>
    <p class="footer-copyright">{{ copyright }}</p>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import FooterInstallButton from './FooterInstallButton.vue'
import { h } from 'vue'

const { theme } = useData()

const message = computed(() => {
  const baseMessage = theme.value.footer?.message || ''
  return baseMessage
})

const copyright = computed(() => theme.value.footer?.copyright || '')
</script>

<style scoped>
.custom-footer {
  padding: 32px 24px;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
}

.footer-message {
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.footer-message :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-message :deep(a:hover) {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.footer-copyright {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: var(--vp-c-text-3);
}
</style>

