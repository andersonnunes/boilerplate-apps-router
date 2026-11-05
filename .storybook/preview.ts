import React from 'react'
import type { Preview } from '@storybook/react'
import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        React.Fragment,
        null,
        React.createElement(GlobalStyles),
        React.createElement(Story)
      )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
