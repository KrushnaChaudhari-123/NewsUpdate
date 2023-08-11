
import './App.css';
import Navbar from './component/Navbar';
import News from "./component/News";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
  
   <Routes>
    <Route path ="/" element={<News pageSize={9} country ="in" category="general"/>}/>
   </Routes>
   <Routes>
    <Route path ="/home" element={<News pageSize={9} country ="in" category="general"/>}/>
   </Routes>
   <Routes>
    <Route path ="/business" element={<News pageSize={9} country ="in" category="business"/>}/>
   </Routes>
   <Routes>
    <Route path ="/entertainment" element={<News pageSize={9} country ="in" category="entertainment"/>}/>
   </Routes>
   <Routes>
    <Route path ="/health" element={<News pageSize={9} country ="in" category="health"/>}/>
   </Routes>
   <Routes>
    <Route path ="/science" element={<News pageSize={9} country ="in" category="science"/>}/>
   </Routes>
   <Routes>
    <Route path ="/sports" element={<News pageSize={9} country ="in" category="sports"/>}/>
   </Routes>
   <Routes>
    <Route path ="/technology" element={<News pageSize={9} country ="in" category="technology"/>}/>
   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App;
