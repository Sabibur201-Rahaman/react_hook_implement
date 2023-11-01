import { useRef, useState } from "react";

function App() {
  const [myObject, setMyObject] = useState({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  });
  const change = () => {
    setMyObject({
      key1: 'newValue1',
      key2: 'value1',
      key3: 'value2',
      key4: 'value3',
      key5: 'mainValue3',
    });
  };
  return (
    <>
    <p>{myObject.key1}</p>
      <button onClick={change}>click</button>
    </>
  );
}

export default App;
