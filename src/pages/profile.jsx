import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  );
};

export default Profile;
