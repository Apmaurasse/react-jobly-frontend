import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useConfirmLoggedIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
        // Navigate to the home page if currentUser is not found
        navigate('/');
      }
    } catch (error) {
      console.error('Error retrieving currentUser:', error);
      // Handle error accordingly, maybe log it or display a message to the user
    }
  }, []);

};

export default useConfirmLoggedIn;

