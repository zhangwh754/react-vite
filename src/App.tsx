import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.scss'
// import List from './pages/Manage/List'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <header>
        <h3>问卷调查</h3>
      </header>
      <main className={styles['app-container']}>
        <List></List>
      </main> */}
    </>
  )
}

export default App
