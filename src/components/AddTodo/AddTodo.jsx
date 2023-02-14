import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimedText = text.trim();
    if (trimedText.length === 0) {
      return;
    }

    onAdd({ id: uuidv4(), text: trimedText, status: 'active' });
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="할 일을 추가하세요!"
      />
      <button className={styles.button}>enter</button>
    </form>
  );
};

export default AddTodo;
