
module.exports = {
  corePlugins: {
    container: false
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.css'
  ],
  safelist: ['hidden', 'mb-2', 'text-gray-500', 'text-red-500', 'mb-1', 'text-xs', 'border-1', 'border-sky-700', 'border-sky-500',
    'fixed', 'inset-0', 'bg-gray-500', 'bg-opacity-50', 'transition-opacity'],
  theme: {
    extend: {
      colors: {
        marketing: {
          400: 'var(--tsxm-marketing400)',
          DEFAULT: 'var(--tsxm-marketing)',
          500: 'var(--tsxm-marketing400)'
        },
        base: {
          text: 'var(--tsxm-text)',
          headline: 'var(--tsxm-headline)',
          textlink: 'var(--tsxm-textLink)',
          textlinkHover: 'var(--tsxm-textLinkHover)',
          mainBackground: 'var(--tsxm-mainBackground)',
          secondaryBackground: 'var(--tsxm-secondaryBackground)'
        },
        primary: {
          400: 'var(--primaryColor400)',
          DEFAULT: 'var(--primaryColorRegular)',
          500: 'var(--primaryColor500)'
        },
        secondary: {
          400: 'var(--secondaryColor400)',
          DEFAULT: 'var(--secondaryColorRegular)',
          500: 'var(--secondaryColor500)'
        },
        third: {
          400: 'var(--thirdColor400)',
          DEFAULT: 'var(--thirdColorRegular)',
          500: 'var(--thirdColor500)'
        },
        success: {
          400: 'var(--tsxm-success400)',
          DEFAULT: 'var(--tsxm-success)',
          500: 'var(--tsxm-success500)'
        },
        warning: {
          400: 'var(--tsxm-warning400)',
          DEFAULT: 'var(--tsxm-warning)',
          500: 'var(--tsxm-warning500)'
        },
        danger: {
          400: 'var(--tsxm-danger400)',
          DEFAULT: 'var(--tsxm-danger)',
          500: 'var(--tsxm-danger500)'
        },
        info: {
          400: 'var(--tsxm-info400)',
          DEFAULT: 'var(--tsxm-info)',
          500: 'var(--tsxm-info500)'
        }

      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    function ({ addUtilities }) {
      const additional = {
        '.cmt-2 + .cmt-2': {
          marginTop: '.5rem'
        },
        '.cmt-4 + .cmt-4': {
          marginTop: '1rem'
        },
        '.cmt-8 + .cmt-8': {
          marginTop: '2rem'
        },
        '.cmt-16 + .cmt-16': {
          marginTop: '4rem'
        },
        '.cmt-1 + .cmt-1': {
          marginTop: '.25rem'
        },
        '.position-below': {
          bottom: '0',
          transform: 'translateY(100%)'
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.pin-vert-center': {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '.pin-horz-center': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.hyphens': {
          hyphens: 'auto',
          hyphenLimitChars: '6 3 2'
        },
        '.no-hyphens': {
          hyphens: 'manual'
        },
        '.blur-3': {
          filter: 'blur(3px)'
        },
        '.container': {
          width: '100%',
          minWidth: '320px',
          maxWidth: '1300px'
        },
        '.container-small': {
          width: '100%',
          minWidth: '950px',
          maxWidth: '768px'
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.last-mb-no > :last-child': {
          marginBottom: '0'
        },
        '.separator-pipe:not(:last-child):after': {
          content: '" / "'
        }
      }

      addUtilities(additional)
    }
  ]
}
