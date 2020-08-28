import { createGlobalStyle } from '@xstyled/styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle: any = createGlobalStyle`
    ${normalize};
    
    * {
        user-select: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    
    div#root{
        width: 100%;
        min-height: 100vh;
        display: grid;
        background-color: bg;
        
      h1, h2, h3, h4, h5, h6, p {
          color: text;
      }
    }
`

export default GlobalStyle
