import React, { useState } from 'react';

export function JakisKomponent() {
  const [inputValue, setInputValue] = useState('');
  return (
    <input
      name="input"
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}