import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <DarkModeProvider>
      <Header todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </DarkModeProvider>
  );
}

export default App;
