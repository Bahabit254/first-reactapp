import {Routes, Route} from 'react-router-dom';
import { About } from './components/about';
import { Home } from './components/home';
import { Mismatch } from './components/Mismatch';
import { Navbar } from './components/navbar';
import { Orders } from './components/Orders';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<Orders />} />
        <Route path='*' element={<Mismatch />} />
      </Routes>
    </>

  );
}

export default App;
