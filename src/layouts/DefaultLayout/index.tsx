import { Header } from '../../components/Header'
import * as css from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <css.LayoutContainer>
      <Header />
      <Outlet />
    </css.LayoutContainer>
  )
}
