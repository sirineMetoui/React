import { useState } from 'react';

import './App.css';

import Counter from './counter.jsx';  
import ComposantListeManager from './composantListeManager.jsx';
import ColorBox from './ColorBox.jsx';
import NoteManager from './noteManager.jsx';
import TodoList from './TodoList.jsx';
function App() {




 const initialTasks = [
    { name: "Faire TP React", priority: "Haute", completed: false },
    { name: "Lire cours JS", priority: "Moyenne", completed: true },
    { name: "Réviser examen", priority: "Basse", completed: false }
  ];


  const [count, setCount] = useState(0);
  let name = "sirine";

  return (
    <>
      <h1>Hello, {name}!</h1>

      <div>
        <h1>Mon compteur</h1>
        
        {/* Premier compteur avec valeurs par défaut */}
        <Counter />
        
        {/* Deuxième compteur avec props personnalisées */}
      
      </div>

      <div>
        <button onClick={() => setCount((count) => count + 1)}>
        </button>
      </div>

   

<h1>Exercice 2 : Gestion d’une liste dynamique</h1>

   <div>

      <ComposantListeManager 
        initialItems={['React', 'Angular', 'Vue.js']}
        placeholder="Entrez un nouvel élément"
      />
    </div>





<h1>Exercice 3 : Boîte de couleur</h1>
    <ColorBox 
      initialColor="#FF5733" 
      colorOptions={['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1']}
    />
  
  <div className="App">
      <h1>Exercice 4 : Gestionnaire de notes</h1>
      
      {/* Exemple avec des notes initiales */}
      <NoteManager initialNotes={[15, 12, 18, 10, 14]} />
      
      {/* Exemple sans notes initiales
      <NoteManager /> */}
    </div>




 <h1>Exercice 5 : Liste de tâches avec priorités</h1>
    <div>
      <TodoList initialTasks={initialTasks} />
    </div>


    

    </>
  );





  
}

export default App;