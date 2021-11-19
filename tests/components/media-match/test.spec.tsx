import { render, screen } from '@testing-library/react'

import { MediaMatch } from '#/components/media-match/media-match'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    const desktopParentElement = desktopHeading.parentElement
    const mobileParentElement = mobileHeading.parentElement

    expect(desktopParentElement).toHaveStyleRule('display', 'none')
    expect(mobileParentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    const desktopParentElement = desktopHeading.parentElement
    const mobileParentElement = mobileHeading.parentElement

    expect(desktopParentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })

    expect(mobileParentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
