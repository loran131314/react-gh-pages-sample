import { useState } from "react";

function Hooks() {
  // let a = 1;
  // let text = 'Yamino';
  // const [值, 寫入方法(set值)] = useState(值的預設/字串);
  const [a, setA] = useState(1);
  const [text, setText] = useState('Yamino');

  return (<>
    Hooks / <button onClick={() => {
      setA(a + 1);
      console.log(a);
    }}>{a}</button>
    <br /> {text} / <label htmlFor="text"></label>
    {/* 先寫入onChange再寫value="" */}
    <input type="text" id="text" value={text} onChange={(e) => {
      console.log(e);
      console.log(e.target.value);
      setText(e.target.value);
    }} />
  </>)
};

export default Hooks;


