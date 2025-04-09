// client/src/App.js

import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

// Exemplo de lista inicial de tarefas
const initialTasks = [
  { id: 'task-1', content: 'Fazer a pesquisa' },
  { id: 'task-2', content: 'Desenvolver a interface' },
  { id: 'task-3', content: 'Testar funcionalidades' }
];

function App() {
  const [tasks, setTasks] = React.useState(initialTasks);

  // Função chamada ao finalizar o drag-and-drop
  const onDragEnd = (result) => {
    // Se não tiver destino, encerra a função
    if (!result.destination) return;

    // Realiza a reorganização das tarefas
    const newTasks = Array.from(tasks);
    const [movedTask] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, movedTask);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>TaskFlow - Kanban Básico</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      className="task-card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;