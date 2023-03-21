import PostsAside from './components/postsAside/PostsAside';
import './App.css'
import Button from './components/ui/button/Button';

function App() {
  return (
    <div className="App">
      <h1>My app 
        <Icon icon='shower' lg />
        <Icon icon='facebook-official'/>
        </h1>
      <main>
        <Button>Click</Button>
        <Button>Contact</Button>
        <Button>About</Button>
      </main>
      <aside className='aside'>
        <PostsAside />
      </aside>
    </div>
  )
}

export default App
