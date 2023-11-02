import { useRef, useState } from "react";
import Hello from "./hello";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const addToList = () => {
    list.push(item);
    setList([...list]);
  };
  const removeItem=(index)=>{
    list.splice(index,1)
    setList([...list])
  }
  return (
    <>
    <Hello/>
      {/* <p>{item}</p>
    <p>{list.length}</p> */}
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button onClick={()=>{
                      removeItem(index)
                    }}>Remove</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      <input onChange={(e) => setItem(e.target.value)} placeholder="item" />
      <button onClick={addToList}>click</button>
    </>
  );
}

export default App;
