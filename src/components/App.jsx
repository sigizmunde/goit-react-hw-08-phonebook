import { Contacts } from 'pages/Contacts/Contacts';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/authThunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<></>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
