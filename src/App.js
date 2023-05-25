import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import AddScenario from './Pages/AddScenario';
import ViewScenario from './Pages/ViewScenario';
import AddVehicle from './Pages/AddVehicle';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/add-scenario' element={<AddScenario />} />
        <Route path='/view-scenario' element={<ViewScenario />} />
        <Route path='/add-vehicle' element={<AddVehicle />} />
      </Route>
    </Routes>
  );
}

export default App;
