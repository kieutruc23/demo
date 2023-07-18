import React, { useState } from 'react';

const ButtonComponent = () => {
  const [color, setColor] = useState(''); // State cho màu
  const [text, setText] = useState(''); // State cho văn bản
  const [count, setCount] = useState(0); // State cho số lần click

  const handleColorClick = () => {
    setColor('green');
  };

  const handleTextClick = () => {
    setText('Hello, world!');
  };

  const handleCountClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleColorClick} style={{ backgroundColor: color }}>
        Nút 1
      </button>
      <button onClick={handleTextClick}>
        Nút 2
      </button>
      <button onClick={handleCountClick}>
        Nút 3 ({count})
      </button>
      <p>{text}</p> 
    </div>
  );
};

export default ButtonComponent;


