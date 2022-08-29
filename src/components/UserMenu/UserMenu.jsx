import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';
import { logOutUser } from 'redux/authThunk';
import { Caption, LogoutBtn, Menu } from './UserMenu.styled';

export const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <Menu>
      <Caption>{email}</Caption>
      <LogoutBtn type="button" onClick={handleLogOut}>
        Log Out
      </LogoutBtn>
    </Menu>
  );
};
