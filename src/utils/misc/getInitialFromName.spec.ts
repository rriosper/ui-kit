import getInitialFromName from './getInitialFromName'

describe('Misc', () => {
  test('getIntialFromName', () => {
    expect(getInitialFromName()).toBe('')
    expect(getInitialFromName(null)).toBe('')
    expect(getInitialFromName(false)).toBe('')
    expect(getInitialFromName(true)).toBe('')
    expect(getInitialFromName(0)).toBe('')
    expect(getInitialFromName(1)).toBe('')
    expect(getInitialFromName([])).toBe('')
    expect(getInitialFromName({})).toBe('')
    expect(getInitialFromName('')).toBe('')
    expect(getInitialFromName('Roman')).toBe('R')
    expect(getInitialFromName('Roman test')).toBe('RT')
    expect(getInitialFromName('Roman du test')).toBe('RT')
  })
})
