import generateColorPalette from './generateColorPalette'

test('generateColorPalette', () => {
  expect(generateColorPalette('red')).toMatchSnapshot()
  expect(generateColorPalette('blue')).toMatchSnapshot()
  expect(generateColorPalette('#333')).toMatchSnapshot()
})
