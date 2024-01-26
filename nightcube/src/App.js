import './App.css';
import SuperAdmin from './pages/SuperAdmin';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Outlets from './pages/Outlets';
import Artists from './pages/Artists';
import Events from './pages/Events';
import Admin1 from './pages/Admin1';
import Admin1User from './pages/Admin1User';
import Admin1artist from './pages/Admin1artist';
import Admin1Event from './pages/Admin1Event';
import Admin1account from './pages/Admin1account';
import Admin2account from './pages/Admin2account';
import Admin2 from './pages/Admin2';
import Admin2pos from './pages/Admin2pos';
import Admin2stories from './pages/Admin2stories';
import Admin2Outlet from './pages/Admin2Outlet';
import SuperAdminEvent from './pages/SuperAdminEvent';
import SuperAdminArtist from './pages/SuperAdminArtist';
import SuperAdminOutlets from './pages/SuperAdminOutlets';
import SuperAdminUser from './pages/SuperAdminUser';
import SuperAdminPos from './pages/SuperAdminPos';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuperAdmin />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
        <Route path="/super-admin-event" element={<SuperAdminEvent />} />
        <Route path="/super-admin-artist" element={<SuperAdminArtist />} />
        <Route path="/super-admin-outlets" element={<SuperAdminOutlets />} />
        <Route path="/super-admin-user" element={<SuperAdminUser />} />
        <Route path="/super-admin-pos" element={<SuperAdminPos />} />
        <Route path="/admin1" element={<Admin1 />} />
        <Route path="/admin1user" element={<Admin1User />} />
        <Route path="/admin1artist" element={<Admin1artist />} />
        <Route path="/admin1event" element={<Admin1Event />} />
        <Route path="/admin1account" element={<Admin1account />} />
        <Route path="/admin2account" element={<Admin2account />} />
        <Route path="/admin2" element={<Admin2 />} />
        <Route path="/admin2outlet" element={<Admin2Outlet />} />
        <Route path="/admin2pos" element={<Admin2pos />} />
        <Route path="/admin2stories" element={<Admin2stories />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/users" element={<Users />} />
        <Route path="/events" element={<Events />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/outlets" element={<Outlets />} />
      </Routes>
    </Router>
  );
}

export default App;