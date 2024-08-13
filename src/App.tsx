import styles from './App.module.scss'
import List from './pages/List'

function App() {
  return (
    <>
      <header>
        <h3>问卷调查</h3>
      </header>
      <main className={styles['app-container']}>
        <List></List>
      </main>
    </>
  )
}

export default App
