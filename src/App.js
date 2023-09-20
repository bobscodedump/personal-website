import NavBar from './components/NavBar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <NavBar />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
