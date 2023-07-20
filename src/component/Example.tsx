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
// Trong ví dụ này, chúng ta sử dụng hai state isLoggedIn và isAdmin để đại diện cho trạng thái đăng nhập và quyền admin của người dùng.

// Khi người dùng nhấn vào nút "Login", state isLoggedIn sẽ được cập nhật thành true.

// Khi người dùng nhấn vào nút "Make Admin" hoặc "Remove Admin", state isAdmin sẽ thay đổi giá trị, từ false thành true hoặc từ true thành false.

// Dựa vào giá trị của isLoggedIn và isAdmin, chúng ta sử dụng toán tử && để kiểm tra các điều kiện và hiển thị nội dung tương ứng.

// Nếu cả isLoggedIn và isAdmin đều là true, phần tử <h1> "Welcome, Admin!" sẽ được hiển thị.

// Nếu isLoggedIn là true và isAdmin là false, phần tử <h1> "Welcome, User!" sẽ được hiển thị.

// Nếu isLoggedIn là false, phần tử <h1> "Please log in to access this page." sẽ được hiển thị.

// Với ví dụ trên, bạn có thể thấy cách sử dụng toán tử && trong React để kiểm tra điều kiện và hiển thị nội dung tương ứng dựa trên kết quả của các điều kiện đó.
