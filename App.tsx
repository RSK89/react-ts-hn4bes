import React, { useState } from 'react';

export default function App() {
  const [count, SetCount] = useState(0);
  const [Text, SetText] = useState('Enter Your Name');
  const [Show, SetShow] = useState(false);

  const handle = (e) => {
    SetText(e.target.value);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => SetCount(count + 1)}>Increment</button>
      <br />
      <input type="text" onChange={handle} />
      {Text}
      <br />
      <button onClick={() => SetShow(!Show)}>Hide and SHow</button>
      {Show && <h1>Iam REan</h1>}
    </>
  );
}
