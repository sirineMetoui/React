import React, { useState } from "react";

function TodoList({ initialTasks }) {

  const [tasks, setTasks] = useState(initialTasks || []);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  // Ajouter tâche
  const addTask = () => {
    if (taskName.trim() === "") return;

    const newTask = {
      name: taskName,
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  // Marquer terminé
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Recherche
  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  // Statistiques
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;

  return (
    <div>
      <h2>Todo List avec Priorités</h2>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Ajouter une tâche</h3>

      <input
        type="text"
        placeholder="Nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>

      <button onClick={addTask}>Ajouter</button>

      <h3>Liste des tâches</h3>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.name} - {task.priority}
            </span>

            <button onClick={() => toggleTask(index)}>
              {task.completed ? "Annuler" : "Terminé"}
            </button>
          </li>
        ))}
      </ul>

      <h3>Statistiques</h3>
      <p>Total des tâches : {totalTasks}</p>
      <p>Tâches terminées : {completedTasks}</p>
    </div>
  );
}

export default TodoList;