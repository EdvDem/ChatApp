export const lightColors = {
  primary: '#17FF4D',
  danger: 'red',
  background: '#FFFFFF',
  border: 'rgb(200, 200, 200)',
  placeholder: '#333',
  input: {
    background: '#FFFFFF',
    text: '#000000',
    placeholder: '#999999',
    border: '#DDDDDD',
  }
} as const

export type ThemeColors = typeof lightColors
