const palettes = {
  gray: [
    '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8',
    '#64748b', '#475569', '#334155', '#1e293b', '#0f172a',
  ],
  dignity: [
    '#e7f9ff', '#d3f4ff', '#afe8ff', '#7fd5ff', '#4db3ff',
    '#258eff', '#0164ff', '#0056d6', '#003d99', '#041e42',
  ],
  integrity: [
    '#fdf3f3', '#fbeae8', '#f7d4d4', '#f0b2b1', '#e68686',
    '#d95a5e', '#c43a45', '#a42c38', '#862633', '#6d222f',
  ],
  grace: [
    '#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15',
    '#eaaa00', '#ca8a04', '#a16207', '#854d0e', '#713f12',
  ]
}

function generateColorPalette( name = '', colors = [], defaultColor = '' ) {
  return {
     50: `var(--color-${ name }-50, ${colors[0]})`,
    100: `var(--color-${ name }-100, ${colors[1]})`,
    200: `var(--color-${ name }-200, ${colors[2]})`,
    300: `var(--color-${ name }-300, ${colors[3]})`,
    400: `var(--color-${ name }-400, ${colors[4]})`,
    500: `var(--color-${ name }-500, ${colors[5]})`,
    600: `var(--color-${ name }-600, ${colors[6]})`,
    700: `var(--color-${ name }-700, ${colors[7]})`,
    800: `var(--color-${ name }-800, ${colors[8]})`,
    900: `var(--color-${ name }-900, ${colors[9]})`,
    DEFAULT: `var(--color-${ name }, ${defaultColor})`,
  };
}

const colors = {
  white: 'var(--color-white, #ffffff)',
  black: 'var(--color-black, #000000)',
  transparent: 'transparent',
  current: 'currentColor',

  gray: generateColorPalette( 'gray', palettes.gray, palettes.gray[7] ),
  dignity: generateColorPalette( 'dignity', palettes.dignity, palettes.dignity[9] ),
  integrity: generateColorPalette( 'integrity', palettes.integrity, palettes.integrity[8] ),
  grace: generateColorPalette( 'grace', palettes.grace, palettes.grace[5] ),
}

module.exports = { colors };
