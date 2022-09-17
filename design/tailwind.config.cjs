/** @type {import('tailwindcss').Config} */
let localColors = {
  primary: '#005689',
  secondary: {
    normal: '#007CB9',
    muted: '#75B3D1',
  },
  tertiary: {
    normal: '#4C47A8',
    muted: '#8D89E1',
  },
  accent: '#F6C667',
  neutral: {
    dark: {
      700: '#002F4B',
      300: '#668699',
      200: '#C2CFD6',
    },
    light: {
      100: '#F7FAFD',
      200: '#EFF7FB',
      300: '#E6F1FA',
      400: '#BCDEF5',
    }
  }

}

module.exports = {
  content: [
    './index.html',
    './pages/**/*.{twig,html}',
    './templates/**/*.twig',
    './src/**/*.{html,twig,js,ts}',
  ],
  safelist: [
    '.select2.select2-container.select2-container--default',
    'bootstrap-datetimepicker-widget',
    'datepicker-days',
    'datepicker-months',
    'datepicker-years',
    'datepicker-decades',
    'table-condensed',
    'decade',
    'disabled',
  ],
  theme: {
    screens: {
      // 'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'neutral-light-100': localColors.neutral.light['100'],
        'neutral-light-200': localColors.neutral.light['200'],
        'neutral-light-300': localColors.neutral.light['300'],
        'neutral-light-400': localColors.neutral.light['400'],
        'neutral-dark-700': localColors.neutral.dark['700'],
        'neutral-dark-300': localColors.neutral.dark['300'],
        'neutral-dark-200': localColors.neutral.dark['200'],
        
        // 'tertiary': localColors.tertiary.normal,

        'error-focus': '#F3BFBF',
        'error-content-focus': '#DE2121',
      },
    },
    // fontFamily: https://tailwindcss.com/docs/adding-custom-styles
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: localColors.primary,
          'primary-content': '#F7FAFD',
          secondary: '#BCDEF5',
          'secondary-content': localColors.secondary.normal,
          accent: '#F6C667',
          'accent-content': '#002F4B',
          success: '#80EB7E',
          'success-content': '#002F4B',
          error: '#F6D7D7',
          'error-content': '#E34242',

          'base-100': localColors.neutral.light[100],
          'base-200': '#EFF7FB',
          'base-300': '#E6F1FA',
          'base-content': '#002F4B',
          
          '--rounded-box': '.75rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.35rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.15s', // duration of animation when you click on button
          '--animation-input': '0.1s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'capitalize', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    // darkTheme: 'dark',
  },
}
