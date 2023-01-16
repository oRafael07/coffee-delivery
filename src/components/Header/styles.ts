import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const HeaderItem = styled.li`
  list-style: none;
`

const BUTTON_COLORS = {
  purple: '#EBE5F9',
  orange: '#F1E9C9',
} as const

interface HeaderLinkProps {
  background: keyof typeof BUTTON_COLORS
  textColor: string
}

export const HeaderLink = styled(NavLink)<HeaderLinkProps>`
  position: relative;
  display: flex;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  background: ${(props) => BUTTON_COLORS[props.background]};
  color: ${(props) => props.textColor};
`

export const CounterCart = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #c47f17;
  border-radius: 50%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 5px;
  font-size: 14px;
  line-height: 0;

  transform: translateX(+50%) translateY(-50%);
`
