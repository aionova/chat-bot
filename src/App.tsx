import Chat from "./components/Chat/Chat";
import styles from './App.module.scss';

export default function App() {
  return (
      <div className={styles.app}>
        <Chat />
      </div>
  );
}
