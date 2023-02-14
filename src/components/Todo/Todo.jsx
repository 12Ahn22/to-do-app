import { TiDelete } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status, id } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({
      ...todo,
      status,
    });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label
        className={`${styles.text} ${
          status === 'completed' ? `${styles.completed}` : ''
        }`}
        htmlFor={id}
      >
        {text}
      </label>

      <button className={styles.button} onClick={onUpdate}>
        <AiOutlineEdit />
      </button>
      <button className={styles.button} onClick={handleDelete}>
        <TiDelete />
      </button>
    </li>
  );
};

export default Todo;
