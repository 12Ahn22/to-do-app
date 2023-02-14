import styles from './Header.module.css';

const Header = ({ todos }) => {
  const total = todos.length;
  const actives = todos.filter((todo) => todo.status === 'active').length;
  const complted = total - actives;

  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
