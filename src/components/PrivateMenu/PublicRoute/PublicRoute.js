import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function PublicRoute({ children, redirectTo, restricted }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route>
      {isLoggedIn && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};
export default PublicRoute;
