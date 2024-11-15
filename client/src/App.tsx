import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main className='container container-fluid mt-5'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

