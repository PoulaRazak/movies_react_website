import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Details from '../pages/DetailsPage';
import Favorite from '../pages/Favorite';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Login from '../pages/Login';
import SignUp from '../pages/SIgnup';
import Layout from '../components/Layout';

function AppRouter() {

  const routes =createBrowserRouter([
    {path:'/login',element:<Login/>},
    {path:'/register',element:<SignUp/>},
    {
    path:'',
    element:<Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/movie-details/:id',element:<Details/>},
      {path:'/favorite',element:<Favorite />},
      {path:'/movies',element:<Movies />},
      {path:'*',element:<NotFound />},
    ]
  }])
  return (

    <RouterProvider router={routes}/>
  
    // <BrowserRouter>
    //   <Navbar />
      
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/movie-details/:id" element={<Details/>} />
    //     <Route path="/favorite" element={<Favorite />} />
    //     <Route path="/movies" element={<Movies />} />
    //     <Route path="/login" element={<Login/>} />
    //     <Route path='/register' element={<SignUp/>}/>
    //     <Route path="*" element={<NotFound />} />

    //   </Routes>

    //   <Footer />
    // </BrowserRouter>
  );
}


export default AppRouter;
