// import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();

  const isLoggedIn = username;

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default Profile;
