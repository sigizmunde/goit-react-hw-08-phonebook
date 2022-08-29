import { Outlet } from 'react-router-dom';
import React from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';
import { HeaderMenu, NavLinkStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <HeaderMenu>
        <nav>
          {!isLoggedIn && (
            <>
              <NavLinkStyled to="/register">Register</NavLinkStyled>
              <NavLinkStyled to="/login">Log in</NavLinkStyled>
            </>
          )}
          {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        </nav>
        {isLoggedIn && <UserMenu />}
      </HeaderMenu>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          backgroundColor: 'var(--back-color-2)',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
