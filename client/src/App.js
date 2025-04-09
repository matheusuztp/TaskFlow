// client/src/App.js

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import Auth from './components/Auth';
import { auth } from './firebase';
import SnackbarProviderWrapper from './SnackbarProvider';

const initialTasks = [
  { id: 'task-1', content: 'Fazer a pesquisa' },
  { id: 'task-2', content: 'Desenvolver a interface' },
  { id: 'task-3', content: 'Testar funcionalidades' }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    const [movedTask] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, movedTask);
    setTasks(newTasks);
  };

  return (
    <SnackbarProviderWrapper>
      <div className="App">
        {user ? (
          <>
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
          </>
        ) : (
          <Auth />
        )}
      </div>
    </SnackbarProviderWrapper>
  );
}

export default App;