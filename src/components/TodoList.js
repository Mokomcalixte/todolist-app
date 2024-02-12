// Importation du Hook useState depuis la bibliothèque React
import { useState } from "react";

// Importation du fichier de styles CSS associé à Todolist
import './Todolist.css';

// Définition du composant fonctionnel Todolist
const Todolist = () => {
  // Déclaration des états locaux inputValue et setInputValue avec useState, initialisés à une chaîne vide
  const [inputValue, setInputValue] = useState('');

  // Déclaration de l'état local tasks et de la fonction setTasks avec useState, initialisés à un tableau vide
  const [tasks, setTasks] = useState([]);

  // Fonction handleChange qui met à jour l'état inputValue à chaque changement dans le champ de texte
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // la fonction trim permet de supprimer les espaces Fonction addTask qui ajoute la tâche à la liste si elle a au moins 3 caractères, sinon affiche une alerte
  const addTask = () => {
    if (inputValue.trim().length >= 3) { 
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    } else {
      alert('La tâche doit comporter au moins 3 caractères.');
    }
  };

  // Fonction deleteTask qui supprime une tâche de la liste en fonction de son index
  const deleteTask = (index) => {
    const newTasks = [...tasks]; 
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Retourne la structure JSX du composant Todolist
  return (
    <div >
      <h1 className="title">MA TODO LIST</h1>
      {/* Champ de texte pour ajouter une tâche, lié à l'état inputValue et avec gestion du changement par handleChange */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrer une tâche"
      />
      {/* Bouton "Ajouter" qui déclenche la fonction addTask au clic */}
      <button className="btn" onClick={addTask}>Ajouter</button>

      {/* Conteneur de la liste des tâches */}
      <div className="task-list-container"> 

        {/* {cette fonction () => va me retourner cette fonction  deleteTask(index)}>map permet d'iterer ou parcourir chaque element de la todoliste Liste des tâches affichées à partir du tableau tasks, chaque tâche avec un bouton "Effacer" */}
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="btn" onClick={() => deleteTask(index)}>Effacer</button> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Exportation du composant Todolist pour une utilisation dans d'autres fichiers
export default Todolist;




