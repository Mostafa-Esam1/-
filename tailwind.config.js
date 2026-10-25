/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media', // الدارك مود بيتبع إعدادات الجهاز
  theme: {
    extend: {
      // الألوان متعرّفة كمتغيّرات في src/index.css عشان الدارك مود
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        deep: 'var(--deep)',
        ondeep: '#f4f6f1',
        'ondeep-muted': '#b7cdc4',
        accent: '#d3351c',
        'accent-ink': 'var(--accent-ink)',
        gold: '#e8a91d',
      },
      fontFamily: {
        display: ['Lalezar', 'Cairo', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', '"Segoe UI"', 'Tahoma', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
