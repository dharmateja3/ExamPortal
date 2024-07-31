import React from 'react';

const Dashboard = ({ username }) => {

  return (
    <div>
      <div className='bg-info'>
      <h2>Welcome, {username}!</h2>
      </div>
    </div>
  );
};

export default Dashboard;
