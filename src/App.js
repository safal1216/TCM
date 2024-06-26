import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './app.css';
import Home from './pages/home/home';
import Prayagraj from './pages/centre/prayagraj';
import Planning from './pages/plan_details/planning';
import Cat from './pages/Course_page/cat';
import Panchmukhi from './pages/panchmukhi/panchmukhi';
import {Testimonial} from './pages/Testimonials/stud_testimonial';
import Teacher from './pages/teachers/teacher_one';
import {Login} from './pages/login_page/login';
import {Signup} from './pages/signup_page/signup';
import { Offline_centre as OfflineCentre } from './pages/Offline_centre/offline_centre';
import {Plans} from './pages/plans/plans';
import { Past_papers as PastPapers } from './pages/Past_papers/past_papers';
import { Test_series as TestSeries } from './pages/test_series/test_series';
import { Form_page as FormPage } from './pages/form_page/form_page';
import {Checkout} from './pages/checkout_page/checkout';
import PopupHome from './pages/home/popup_home';
import {Confirmation} from './pages/form_page/confirmation';
import MorePage from './pages/past_papers_more_page/more_page';
import Navbar from './components/navbar/navbar';
const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (                                                 
  <Router>
      <ScrollToTop/>

    <Routes>
      <Route path="/" element={ <><Navbar currentPage="home"/><Home /></>} />
      <Route path="/offline-centre/:city/:id" element={ <><Navbar currentPage="home" currentImg="home"/><Prayagraj /></>} />
      <Route path="/planning" element={ <><Navbar currentPage="home" currentImg="home"/><Planning /></>} />
      <Route path="/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/cat/:id/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/cat/:id/cat/:id/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/panchmukhi/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></ >} />
      <Route path="/panchmukhi/cat/:id/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/panchmukhi/cat/:id/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/past-papers/cat/:id/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/past-papers/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/plans/cat/:id/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/plans/cat/:id" element={<><Navbar currentPage="home" currentImg="home"/><Cat /></>} />
      <Route path="/panchmukhi" element={<><Navbar currentPage="specialPage" currentImg="specialPage"/><Panchmukhi /></>} />    
      <Route path="/testimonial/:id" element={<><Navbar currentPage="home" currentImg="home"/><Testimonial /></>} />
      <Route path="/testimonial/:id/testimonial/:id" element={<><Navbar currentPage="home" currentImg="home"/><Testimonial /></>} />
      <Route path="/teacher/:id/testimonial/:id" element={<><Navbar currentPage="home" currentImg="home"/><Testimonial /></>} />
      <Route path="/teacher/:id" element={<><Navbar currentPage="specialPage" currentImg="specialPage"/><Teacher /></>} />
      <Route path="/login" element={<><Navbar currentPage="home" currentImg="home"/><Login /></>} />
      <Route path="/signup" element={<><Navbar currentPage="home" currentImg="home"/><Signup /></>} />
      <Route path="/offline-centre" element={<><Navbar currentPage="home" currentImg="home"/><OfflineCentre /></>} />
      <Route path="/plans" element={<><Navbar currentPage="home" currentImg="home"/><Plans /></>} />
      <Route path="/past-papers" element={<><Navbar currentPage="specialPage" currentImg="specialPage"/><PastPapers /></>} />
      <Route path="/test-series" element={<><Navbar currentPage="home" currentImg="home"/><TestSeries /></>} />
      <Route path="/form-page" element={<><Navbar currentPage="home" currentImg="home"/><FormPage /></>} />
      <Route path="/checkout" element={<><Navbar currentPage="home" currentImg="home"/><Checkout /></>} />
      <Route path="/popup-home" element={<><Navbar currentPage="home" currentImg="home"/><PopupHome /></>} />
      <Route path="/confirmation" element={<><Navbar currentPage="home" currentImg="home"/><Confirmation /></>} />
      <Route path="/more-page" element={<><Navbar currentPage="specialPage" currentImg="specialPage"/><MorePage /></>} />
    </Routes>
  </Router>
  );
}

export default App;

