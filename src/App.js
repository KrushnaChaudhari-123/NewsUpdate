
import './App.css';
import Navbar from './component/Navbar';
import News from "./component/News";

function App() {
  return (
    <>
   <Navbar/>
   <News pageSize={6}/>
    </>
  )
}

export default App;
