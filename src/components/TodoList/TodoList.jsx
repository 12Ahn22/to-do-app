import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ setTodos, todos }) => {
  const handleAdd = (todo) => {
    console.log(todo);
    setTodos((prev) => [...prev, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };

  const handleDelete = (deleted) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
