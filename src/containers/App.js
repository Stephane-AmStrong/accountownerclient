import './App.css';
import React, { Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Home from '../components/Home/Home';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';
const OwnerList = lazy(() => import('./Owner/OwnerList/OwnlerList'));


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/owner-list' element={<OwnerList />} />
            <Route path='/500' element={<InternalServer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
