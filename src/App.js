import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: '공부하기', status: 'active' },
    { id: '2', text: '청소하기', status: 'active' },
  ]);

  return (
    <DarkModeProvider>
      <Header todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </DarkModeProvider>
  );
}

export default App;
