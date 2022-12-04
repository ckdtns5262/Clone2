import Navbar from './components/Navbar'
import Trending from './components/Trending';
import Jazz from './components/Jazz';
function App() {
  return (
    <div className="bg-black">
     <Navbar/>
     <Trending/>
     <Jazz/>
     <div className='h-screen'></div>
    </div>
  );
}

export default App;
