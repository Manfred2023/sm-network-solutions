import { ref, watchEffect } from 'vue'

export type Theme = 'light' | 'dark'

const read = () => { try { return localStorage.getItem('theme') } catch { return null } }
const saved = read()
const prefersDark = typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches

export const theme = ref<Theme>(saved === 'dark' || saved === 'light' ? saved : prefersDark ? 'dark' : 'light')

watchEffect(() => {
  const dark = theme.value === 'dark'
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#060B1A' : '#FFFFFF')
  try { localStorage.setItem('theme', theme.value) } catch { /* stockage indisponible */ }
})

export const toggleTheme = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark' }
