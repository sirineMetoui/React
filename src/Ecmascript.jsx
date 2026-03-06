import React, { useEffect } from "react";

// Fonction findLongestWord
let findLongestWord = (words) => {
  let [...mots] = words;
  let tab = mots.map((mot) => ({
    mot: mot,
    longueur: mot.length,
  }));
  let resultat = tab.reduce((max, current) =>
    current.longueur > max.longueur ? current : max
  );
  return resultat;
};

const ExerciceComponent = () => {
  useEffect(() => {
    let words = ["chat", "ordinateur", "maison", "stylo"];
    let result = findLongestWord(words);
    console.log("Mot le plus long :", result.mot);
    console.log("Longueur :", result.longueur);
  }, []);

  return (
    <div>
      <h2>Regarde la console pour voir le résultat du mot le plus long</h2>
    </div>
  );
};

export default ExerciceComponent;