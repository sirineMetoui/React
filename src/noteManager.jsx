import React, { useState } from 'react';

function NoteManager({ initialNotes = [] }) {
  // State pour la liste des notes
  const [notes, setNotes] = useState(initialNotes);
  
  // State pour la valeur de l'input
  const [inputValue, setInputValue] = useState('');
  
  // State pour les messages d'erreur
  const [errorMessage, setErrorMessage] = useState('');

  // Fonction pour calculer la moyenne
  const calculerMoyenne = () => {
    if (notes.length === 0) return 0;
    const somme = notes.reduce((acc, note) => acc + note, 0);
    return (somme / notes.length).toFixed(2);
  };

  // Fonction pour ajouter une note
  const ajouterNote = () => {
    const note = parseFloat(inputValue);
    
    // Vérifier que l'input n'est pas vide
    if (inputValue.trim() === '') {
      setErrorMessage('Veuillez entrer une note');
      return;
    }
    
    // Vérifier que c'est un nombre valide
    if (isNaN(note)) {
      setErrorMessage('Veuillez entrer un nombre valide');
      return;
    }
    
    // Vérifier que la note est entre 0 et 20
    if (note < 0 || note > 20) {
      setErrorMessage('La note doit être comprise entre 0 et 20');
      return;
    }
    
    // Ajouter la note
    setNotes([...notes, note]);
    setInputValue('');
    setErrorMessage('');
  };

  // Fonction pour supprimer une note
  const supprimerNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1>Gestionnaire de notes</h1>
      
      {/* Affichage de la moyenne */}
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '15px',
        borderRadius: '5px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h2>Moyenne des notes : {calculerMoyenne()}/20</h2>
        <p>Nombre de notes : {notes.length}</p>
      </div>

      {/* Formulaire d'ajout */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Entrez une note (0-20)"
            min="0"
            max="20"
            step="0.5"
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button
            onClick={ajouterNote}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Ajouter
          </button>
        </div>
        
        {/* Affichage des messages d'erreur */}
        {errorMessage && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            {errorMessage}
          </p>
        )}
      </div>

      {/* Liste des notes */}
      <div>
        <h3>Liste des notes :</h3>
        {notes.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Aucune note pour le moment
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {notes.map((note, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px',
                  marginBottom: '8px',
                  backgroundColor: note >= 10 ? '#e8f5e8' : '#ffebee',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              >
                <span style={{ fontWeight: 'bold' }}>
                  Note {index + 1} : {note}/20
                </span>
                <button
                  onClick={() => supprimerNote(index)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Résumé statistique */}
      {notes.length > 0 && (
        <div style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px'
        }}>
          <p>
            <strong>Note minimale :</strong> {Math.min(...notes)}/20<br />
            <strong>Note maximale :</strong> {Math.max(...notes)}/20
          </p>
        </div>
      )}
    </div>
  );
}

export default NoteManager;