import React, { useState } from 'react';

export default function Home() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid input.');
      return;
    }
    const newItem = inputValue;
    const updatedStack = stack.concat(newItem);
    setStack(updatedStack);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const updatedStack = stack.slice(0, stack.length - 1);
    setStack(updatedStack);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 text-black">Stack of Integers</h1>
      <div className="flex mb-4">
          <input
            type="text"
            className="mr-2 px-2 py-1 border border-gray-300 rounded-md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bg-orange-500 hover:bg-black text-white px-4 py-1 rounded-md" onClick={handlePush}>
  Push
</button>
<button className="bg-yellow-500 hover:bg-red-600 text-white px-4 py-1 rounded-md ml-2" onClick={handlePop}>
  Pop
</button>
        </div>
        {stack.length === 0 ? (
          <p className="text-yellow-500">Stack is empty.</p>
        ) : (
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
  );
}