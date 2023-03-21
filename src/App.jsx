import PostsAside from './components/postsAside/PostsAside';
import './App.css'
import Button from './components/ui/button/Button';
import Icon from './components/ui/icon/Icon';
import ThreeList from './components/three/ThreeList';

const titleArr = []

function App() {
  return (
    <div className="App">
      <h1>My app 
        <Icon icon='shower' lg />
        <Icon icon='facebook-official'/>
        </h1>
        <Grid>
          <div className=''></div>
        </Grid>
        {/* <ThreeList list={titleArr}/>
      <main>
        <Button>Click</Button>
        <Button>Contact</Button>
        <Button>About</Button>
      </main>
      <aside className='aside'>
        <PostsAside />
      </aside> */}
    </div>
  )
}

export default App
