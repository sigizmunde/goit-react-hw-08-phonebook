import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderMenu = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 5px 32px;
  & nav {
    display: flex;
    gap: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: normal;
  color: inherit;
  &.active {
    font-weight: 500;
    color: darkblue;
  }
`;
