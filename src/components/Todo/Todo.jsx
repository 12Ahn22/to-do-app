import { TiDelete } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import styles from './Todo.module.css';
import { useState } from 'react';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status, id } = todo;
  const [updatedText, setUpdatedText] = useState(text);
  const [mode, setMode] = useState('read');

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({
      ...todo,
      status,
      text: updatedText,
    });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleTextChange = (e) => {
    setUpdatedText(e.target.value);
    // onUpdate({
    //   ...todo,
    //   text: updatedText,
    // });
  };

  const handleModeChange = (mode) => {
    setMode(mode);
  };

  if (mode === 'write') {
    return (
      <li className={styles.todo}>
        <input
          className={`${styles.text} ${styles.input}`}
          type="text"
          value={updatedText}
          onChange={handleTextChange}
        />

        <button
          className={styles.button}
          onClick={() => handleModeChange('read')}
        >
          <AiOutlineEdit />
        </button>
        <button className={styles.button} onClick={handleDelete}>
          <TiDelete />
        </button>
      </li>
    );
  }

      <label
        className={`${styles.text} ${
          status === 'completed' ? `${styles.completed}` : ''
        }`}
        htmlFor={id}
      >
        {updatedText}
      </label>

      <button
        className={styles.button}
        onClick={() => handleModeChange('write')}
      >
        <AiOutlineEdit />
      </button>
      <button className={styles.button} onClick={handleDelete}>
        <TiDelete />
      </button>
    </li>
  );
};

export default Todo;
