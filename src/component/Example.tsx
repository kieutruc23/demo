import React, { useState } from 'react';

function ExampleComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleToggleAdmin}>
        {isAdmin ? 'xóa Admin' : 'Admin'}
      </button>
      
      {isLoggedIn && isAdmin && (
        <h1>xin chào admin</h1>
      )}

      {isLoggedIn && !isAdmin && (
        <h1>xin chào bạn</h1>
      )}

      {!isLoggedIn && (
        <h1>vui lòng thử lại.</h1>
      )}
    </div>
  );
}

export default ExampleComponent;
