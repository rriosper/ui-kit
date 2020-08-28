import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components'
import React, { useMemo } from 'react'
import { mergeDeepLeft } from 'ramda'
import GlobalStyle from './GlobalStyle'
import values from './values'
import { processTheme } from './utils'

type ThemeProps = {
  children: React.ReactNode;
  theme?: Object;
};

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }: ThemeProps) => {
  const mixedValues = useMemo(() => (theme ? mergeDeepLeft(theme, values) : values), [theme])
  const processedTheme = useMemo(() => processTheme(mixedValues), [mixedValues])

  return (
    <ThemeProvider theme={processedTheme}>
      <ColorModeProvider>
        <GlobalStyle />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Theme
