/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary:   '#1E3A5F',
        secondary: '#EE6352',
        success:   '#189700',
        cream:     '#F6F3EC',
        skyfade:   '#E8F1FF',
        surface:   '#EFF1F5',
      },
      fontFamily: {
        sans:    ['Manrope', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      letterSpacing: { tightx: '-0.1px' },
      boxShadow: {
        soft:  '0 40px 80px rgba(217, 119, 87, 0.24)',
        card:  '0 10px 30px rgba(30, 58, 95, 0.10)',
        cta:   '0 12px 24px rgba(24, 151, 0, 0.35)',
      },
    },
  },
}
