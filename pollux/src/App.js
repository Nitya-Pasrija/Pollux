import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ReportBox from './pages/ReportBox';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reportBox' element={<ReportBox/>}/>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
