// src/components/LoginPage.jsx
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/'; // Redirect to index.astro if already authenticated
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1>Login Page</h1>
      <p>Please log in to access the application.</p>
      <button onClick={loginWithRedirect}>Log In with Auth0</button>
    </>
  );
};

export default LoginPage;