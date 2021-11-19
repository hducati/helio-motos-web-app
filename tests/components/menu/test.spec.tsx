import { screen, fireEvent } from '@testing-library/react'

import Menu from '#/components/menu/menu'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import {
  menuWithOpacity,
  menuWithoutOpacity
} from '!tests/components/menu/asserts'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    const openMenu = screen.getByLabelText(/open menu/i)
    const search = screen.getByLabelText(/search/i)
    const shoppingCart = screen.getByLabelText(/open shopping cart/i)
    const logo = screen.getByRole('img', { name: /helio motos/i })

    expect(openMenu).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(shoppingCart).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })

  it('should render a menu without opacity', () => {
    renderWithTheme(<Menu />)

    const fullMenu = screen.getByRole('navigation', { hidden: true })

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle(menuWithoutOpacity)
  })

  it('should render a menu with opacity after user event', () => {
    renderWithTheme(<Menu />)

    const fullMenu = screen.getByRole('navigation', { hidden: true })
    const openMenu = screen.getByLabelText(/open menu/i)

    fireEvent.click(openMenu)

    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle(menuWithOpacity)
  })

  it('should close the menu correctly after user event', () => {
    renderWithTheme(<Menu />)

    const fullMenu = screen.getByRole('navigation', { hidden: true })
    const openMenu = screen.getByLabelText(/open menu/i)

    fireEvent.click(openMenu)

    const closedMenu = screen.getByLabelText(/close menu/i)

    fireEvent.click(closedMenu)

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle(menuWithoutOpacity)
  })

  it('should render new options when user is logged', () => {
    renderWithTheme(<Menu username="fake-username" />)

    const myAccount = screen.getByText(/minha conta/i)
    const logout = screen.getByText(/sair/i)

    expect(myAccount).toBeInTheDocument()
    expect(logout).toBeInTheDocument()
  })

  it('should not render myAccount and logout when user is not logged', () => {
    renderWithTheme(<Menu />)

    const myAccount = screen.queryByText(/minha conta/i)
    const logout = screen.queryByText(/sair/i)

    expect(myAccount).not.toBeInTheDocument()
    expect(logout).not.toBeInTheDocument()
  })
})
