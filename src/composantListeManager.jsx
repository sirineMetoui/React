import React, { useState } from 'react';

function ComposantListeManager({ initialItems = [], placeholder = "Entrez un nouvel élément" }) {
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Liste :</h1>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
        />
        <button onClick={addItem}>Ajouter</button>
      </div>
    </div>
  );
}

export default ComposantListeManager;