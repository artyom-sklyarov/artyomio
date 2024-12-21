import { ref } from 'vue'

export function useInitialLoad() {
  const isLoaded = ref(false)

  const startDelay = () => {
    setTimeout(() => {
      isLoaded.value = true
    }, 500)
  }

  if (document.readyState === 'complete') {
    startDelay()
  } else {
    window.addEventListener('load', startDelay, { once: true })
  }

  return isLoaded
}
