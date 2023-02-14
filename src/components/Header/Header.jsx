import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

const Header = ({ todos }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const total = todos.length;
  const actives = todos.filter((todo) => todo.status === 'active').length;
  const complted = total - actives;

  return (
    <header className={styles.header}>
      ✨
      <div>
        <span className={styles.count}>
          total: <span className={styles.accent}>{total}</span>
        </span>
        <span className={styles.count}>
          actives: <span className={styles.accent}>{actives}</span>
        </span>
        <span className={styles.count}>
          completed: <span className={styles.accent}>{complted}</span>
        </span>
      </div>
      <button className={styles.button} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
    </header>
  );
};

export default Header;
