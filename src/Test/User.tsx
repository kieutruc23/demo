const ChildComponent = (props:any) => {
    const { name, age, gender } = props;
  
    return (
      <div>
        <h2>Thông tin người dùng</h2>
        <p>Tên: {name}</p>
        <p>Tuổi: {age}</p>
        <p>Giới tính: {gender}</p>
      </div>
    );
  };
  
  export default ChildComponent;
