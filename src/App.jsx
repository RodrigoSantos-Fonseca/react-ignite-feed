import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rodrigo Fonseca"
            content="Lorem ipsum dolor sit amet"
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>


    </div>
  )
}

export default App

//Default exports vs name exports