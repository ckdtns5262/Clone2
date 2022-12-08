import Navbar from './components/Navbar'
import Trending from './components/Trending';
import Jazz from './components/Jazz';
import Artists from './components/Artists';
function App() {
  return (
    <div className="bg-black">
      {/* Navbar */}
      <Navbar/>
      {/* 빠른 선곡 */}
      <Trending/>
      {/* 다시듣기*/}
      <Jazz/>
      {/* Artists */}
      <Artists/>
      <div className='h-screen'></div>
    </div>
  );
}

export default App;
