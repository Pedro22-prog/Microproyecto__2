import { useAuth } from './contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!currentUser) {
    history.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser.email}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;