// Couleurs et police : charte SM NETWORK SOLUTIONS v1.0 (public/assets/SM-Network-Solutions_Identite-visuelle)
// Les couleurs de thème sont des variables CSS (src/style.css) : clair par défaut, sombre avec la classe .dark sur <html>.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: v('bg'), surface: v('surface'), card: v('card'), ink: v('ink'), muted: v('muted'), line: v('line'),
        tech: v('tech'), band: v('band'),
        brand: { DEFAULT: '#246BFD', hover: '#1A58D6' },
        navy: '#0B1530', mist: '#E9EEF5',
      },
      fontFamily: {
        display: ['Manrope', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'Arial', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '80rem' },
    },
  },
}
