import { Outlet } from 'react-router-dom';
import React from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';
import { HeaderMenu, NavLinkStyled } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetError } from 'redux/authSlice';
import { useEffect } from 'react';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetching = useSelector(authSelectors.getIsFetching);
  const errorMessage = useSelector(authSelectors.getErrorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage !== '') {
      toast.error(errorMessage);
      dispatch(resetError());
    }
  }, [errorMessage, dispatch]);

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
        {isFetching ? <Loader /> : <Outlet />}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored"
      />
    </>
  );
};
