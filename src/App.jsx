import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import ChampionDetailsPage from './Pages/ChampionDetailsPage';

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/champion/:id' element={<ChampionDetailsPage />} />
      </Routes>
    </BrowserRouter>
      {/* System de routing avec BrowserRouter,Routes et Route */}
  </>
}

export default App
