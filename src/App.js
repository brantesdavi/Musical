import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
