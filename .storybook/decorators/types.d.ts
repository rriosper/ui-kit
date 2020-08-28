declare module '@xstyled/styled-components' {
    import styled from 'styled-components'
    export * from 'styled-components'
    export function useColorMode(): [string, (mode: string) => void]
    export default styled;
  }
