import styled from '@xstyled/styled-components'
import { backgroundColor } from '@xstyled/system'

export const SAvatar = styled.div`
  display: flex;
  width: xl;
  height: xl;
  max-width: 100%;
  max-height: 100%;
  ${backgroundColor}
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;
  border: none;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`
