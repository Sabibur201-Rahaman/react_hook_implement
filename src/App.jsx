import { useRef, useState } from "react";

function App() {
  const [myObject, setMyObject] = useState({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  });
  const change = () => {
    setMyObject(
      prevObj=>({
        ...prevObj,
        key1:'Ostad platform',
        key2:'javascript',
        key3:'python'
      })
    );
  };
  return (
    <>
    <p>{myObject.key1}</p>
    <p>{myObject.key2}</p>
    <p>{myObject.key3}</p>
      <button onClick={change}>click</button>
    </>
  );
}

export default App;
