import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, path, exact, strict, sensitive, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      sensitive={sensitive}
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  sensitive: PropTypes.bool,
};

export default ProtectedRoute;