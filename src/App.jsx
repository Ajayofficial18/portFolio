import styles from './App.module.css'
import Header from './Components/Header/Header'
import Content from "./Components/Content/Content"
import About from "./Components/About/About"

function App() {
  return (
    <section className={styles.section}>
      <Content/>
      <Header/>
      
      {/* <About/> */}
    </section>  
  )
}

export default App
