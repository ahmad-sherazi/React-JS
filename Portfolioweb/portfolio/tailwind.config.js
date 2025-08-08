module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        desert: {
          100: '#E3D9B0', // Light sand
          200: '#C2B280', // Sand tan
          300: '#A49A87', // Light brown
          400: '#6B705C', // Olive green
          500: '#4A4E3D', // Dark olive
          700: '#2F3626', // Darker shade for bg-dark
        },
      },
    },
  },
  safelist: [
    'text-blue-300',
    'text-green-300',
    'text-orange-300',
    'text-purple-300',
    'text-cyan-300',
    'text-desert-300',

    'hover:text-blue-300',
    'hover:text-green-300',
    'hover:text-orange-300',
    'hover:text-purple-300',
    'hover:text-cyan-300',
    'hover:text-desert-300',

    'hover:bg-blue-300',
    'hover:bg-green-300',
    'hover:bg-orange-300',
    'hover:bg-purple-300',
    'hover:bg-cyan-300',
    'hover:bg-desert-300',

    'hover:shadow-blue-500/60',
    'hover:shadow-green-500/60',
    'hover:shadow-orange-500/60',
    'hover:shadow-purple-500/60',
    'hover:shadow-cyan-500/60',
    'hover:shadow-desert-500/60',

    'from-blue-300',
    'from-green-300',
    'from-orange-300',
    'from-purple-300',
    'from-cyan-300',
    'from-desert-300',

    'border-blue-300',
    'border-green-300',
    'border-orange-300',
    'border-purple-300',
    'border-cyan-300',
    'border-desert-300',

    'bg-blue-300',
    'bg-green-300',
    'bg-orange-300',
    'bg-purple-300',
    'bg-cyan-300',
    'bg-desert-300',
    'bg-blue-700',
    'bg-green-700',
    'bg-orange-700',
    'bg-purple-700',
    'bg-cyan-700',
    'bg-desert-700',
  ],
  plugins: [require('tailwind-scrollbar-hide')],
};
