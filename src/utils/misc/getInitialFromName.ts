import { path } from 'ramda'
/**
 * Get 2 initial letters from a name
 *
 * @param {string} name - Name to extract the initials.
 */
const getInitials = (name?: string | any): string => {
  if (!name || typeof name !== 'string') {
    return ''
  }

  const splitedName = name.trim().split(' ')
  let output: undefined | null | string = null

  if (splitedName.length > 1) {
    output = `${splitedName[0][0]}${splitedName[splitedName.length - 1][0]}`
  } else {
    output = path([0, 0], splitedName)
  }
  return output ? output.toUpperCase() : 'OO'
}

export default getInitials
