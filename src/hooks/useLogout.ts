
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // In a real application, this would clear auth tokens, cookies, etc.
    // For now, we'll just simulate the logout process
    
    // Clear any stored user data
    localStorage.removeItem('user');
    
    // Show success message
    toast.success('Logged out successfully');
    
    // Redirect to landing page
    navigate('/landing');
  };

  return { logout };
};
