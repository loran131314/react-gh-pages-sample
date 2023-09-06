import { useEffect, useState } from "react";

let n = 0;  // React的運作
function WhyUseEffect() {
  n++;
  console.log('元件運行次數: ', n);
  const [text, setText] = useState('Yamino');
  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log('useEffect:', num)
  }, [num])
  return (<><br />
    <h1>WhyUseEffect Principle</h1>
    <input type="text" onChange={(e) => {
      setText(e.target.value);
      console.log('元件運行次數: ', n, text);
    }} value={text} />
    {'　' + text + '　'}
    <button onClick={() => {
      setNum(num + 1);
      setNum(num + 1); {/*因為狀態會留在原始值, 反覆寫入是拿原始值+1的概念*/ }
      console.log('num:', num);
    }}>{num}</button>
  </>)
};
export default WhyUseEffect;





// useState：執行set前觸發
// useEffect：執行set後觸發
