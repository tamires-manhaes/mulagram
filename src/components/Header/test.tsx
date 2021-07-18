import { render } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  test('should render', async () => {
    const { findByTestId } = render(
      <Header>
        <span>hi! Welcome</span>
      </Header>,
    )
    expect(await findByTestId('header')).toBeTruthy()
  })
})
