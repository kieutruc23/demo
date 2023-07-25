import ChildComponent from './User';

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name="John" age={25} gender="Male" />
    </div>
  );
};

export default ParentComponent;
