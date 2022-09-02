const authSelectors = {
  getIsFetching: state => state.auth.isFetching,
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getUserEmail: state => state.auth.user.email,
  getErrorMessage: state => state.auth.errorMessage,
};

export default authSelectors;
