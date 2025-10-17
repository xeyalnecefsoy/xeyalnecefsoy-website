import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
