import * as React from 'react'
import { alignItems, flexDirection, flexWrap, justifyContent, styled } from 'style'
import { IBoxProps, IFlexProps } from 'interfaces'
import { Box } from '../Box'

export const Flex = styled<IFlexProps>(({ ...props }) => <Box {...props} />)`
  display: ${props => (props.hide ? 'none' : 'flex')};

  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`

Flex.displayName = 'Flex'
