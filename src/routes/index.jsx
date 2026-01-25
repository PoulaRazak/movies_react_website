import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/Aboutus';
import Details from '../pages/DetailsPage';
import Favorite from '../pages/Favorite';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Login from '../pages/Login';

function AppRouter() {
  return (
  
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-details/:id" element={<Details/>} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


export default AppRouter;
