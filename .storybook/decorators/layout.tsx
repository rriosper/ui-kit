import { select } from '@storybook/addon-knobs';
import styled from '@xstyled/styled-components';
import { alignItems, backgroundColor, color, display, flexDirection, height, justifyContent, width, padding } from '@xstyled/system';
import React from 'react';

import { KNOBS_GROUPS } from '../../src';

import makeDecorator from './makeDecorator';

const MODES = {
    default : {
        padding: '10px',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}

const SBox = styled.div`
    ${width}
    ${height}
    ${backgroundColor}
    ${color}
    ${display}
    ${flexDirection}
    ${justifyContent}
    ${alignItems}
    ${padding}
`;

interface LayoutStyleProps {
    mode?: string,
}

interface LayoutProps {
    children: React.ReactNode,
    layout: LayoutStyleProps
}

const Layout: React.FC<LayoutProps> = ({ children,  layout : { mode, ...style}}: LayoutProps) => {
    const options ={ none: 'none', default: 'default', center: 'center'};
    const properMode: string = mode || 'default';
    const modeKnob = select('Mode', options, properMode, KNOBS_GROUPS.layout);
    const modeStyles = MODES[modeKnob] || {};
    return <SBox {...modeStyles}  {...style}>
        {children}
    </SBox>
}

Layout.defaultProps = {
    layout: {
        mode: 'default',
    }
};

const decorator = makeDecorator((Story, { parameters: { layout, ...parameters }, ...rest}) => {
    return <Layout layout={layout}><Story parameters={parameters} {...rest}/></Layout>
})

export default decorator;
