import React from 'react'

type ColorModeProviderProps = {
  children: React.ReactNode;
};

declare module '@xstyled/styled-components'{
  export class ColorModeProvider extends React.Component<
    ColorModeProviderProps
  > {}
}
