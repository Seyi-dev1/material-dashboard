import  appstyle  from './App.module.css';
import React from 'react';
import Home from './pages/home page/Home';
import { Routes, Route, Navigate } from 'react-router-dom'
import UsersPage from './pages/users page/UsersPage';
import ProfilePage from './pages/profile/ProfilePage'
import AppPage from './pages/app page/AppPage'
import AnalyticsPage from './pages/analytics/AnalyticsPage'
import CommercePage from './pages/commerce/CommerecePage'
import ProductsPage from './pages/products/ProdutsPage'





function App() {

  return (
    <div className={appstyle.app}>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='dashboard/users' element={<UsersPage/>}/>
            <Route path='dashboard/profile' element={<ProfilePage/>}/>
            <Route path='dashboard/app'  element={<AppPage/>}/>
            <Route index  element={<Navigate to={'dashboard/app'}/>}/>
            <Route path='dashboard/analytics' element={<AnalyticsPage/>}/>
            <Route path='dashboard/products' element={<ProductsPage/>}/>
            <Route path='dashboard/commerce' element={<CommercePage/>}/>
            <Route path='dashboard/banking' element={<AnalyticsPage/>}/>
            <Route path='dashboard/booking' element={<CommercePage/>}/>
            <Route path='dashboard/file' element={<AnalyticsPage/>}/>
            <Route path='dashboard/user' element={<AnalyticsPage/>}/>
            <Route path='dashboard/invoice' element={<AnalyticsPage/>}/>
            <Route path='dashboard/blog' element={<AppPage/>}/>
            <Route path='dashboard/filemanager' element={<CommercePage/>}/>
            <Route path='dashboard/orders' element={<AnalyticsPage/>}/>
            <Route path='dashboard/health' element={<AnalyticsPage/>}/>
            <Route path='dashboard/logs' element={<CommercePage/>}/>
            <Route path='dashboard/settings' element={<AppPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
