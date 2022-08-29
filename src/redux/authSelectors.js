const authSelectors = {
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getUserEmail: state => state.auth.user.email,
};

export default authSelectors;
