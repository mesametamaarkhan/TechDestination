import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FreelancersPage from './pages/FreelancersPage';
import InternshipsPage from './pages/InternshipsPage';
import CompaniesPage from './pages/CompaniesPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelancers" element={<FreelancersPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;