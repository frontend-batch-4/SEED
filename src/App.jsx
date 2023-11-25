import { Routes, Route } from 'react-router-dom'

// pages
// contoh cara import komponen 👇👇👇
// import NamaKomponen from './pages/NamaKomponen';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<NamaKomponen/>} />
    </Routes>
  );
};