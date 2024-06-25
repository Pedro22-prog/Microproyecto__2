import { Route, Redirect } from 'react-router-dom';
   import { useAuth } from './contexts/AuthContext';
   import PropTypes from 'prop-types';

   const ProtectedRoute = ({ component: Component, ...rest }) => {
     const { currentUser } = useAuth();

     return (
       <Route
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
   };

   export default ProtectedRoute;
