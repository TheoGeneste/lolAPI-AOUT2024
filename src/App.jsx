import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import ChampionDetailsPage from './Pages/ChampionDetailsPage';
import ItemsPage from './Pages/ItemsPage';
import ItemDetailsPage from './Pages/ItemDetailsPage';

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/champion/:id' element={<ChampionDetailsPage />} />
        <Route path='/items' element={<ItemsPage />} />
        <Route path='/item/:name' element={<ItemDetailsPage/>} />
      </Routes>
    </BrowserRouter>
      {/* System de routing avec BrowserRouter,Routes et Route */}
  </>
}

export default App
