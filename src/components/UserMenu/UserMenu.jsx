import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';
import { logOutUser } from 'redux/authThunk';
import { Caption, Menu } from './UserMenu.styled';
import { Button as LogoutBtn } from '@mui/material';

export const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <Menu>
      <Caption>{email}</Caption>
      <LogoutBtn variant="outlined" type="button" onClick={handleLogOut}>
        Log Out
      </LogoutBtn>
    </Menu>
  );
};
