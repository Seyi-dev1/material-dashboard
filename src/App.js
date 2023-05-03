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
import SignIn from './pages/sign in page/signIn';
import SignUp from './pages/sign up page/signUp';
import { checkUserSession } from './redux/user/userReducer';
import { useDispatch } from 'react-redux';
// import { selectCurrentUser } from './redux/user/userSelectors';





function App() {

  const dispatch = useDispatch()

  // const user = useSelector(state=>selectCurrentUser(state))

  React.useEffect(
    ()=>{
      dispatch(checkUserSession())
    },[dispatch]
  )

  return (
    <div className={appstyle.app}>
        <Routes>
          <Route  path='/' element={<Navigate to={'signin'}/>}/>
          <Route  path='signin' element={<SignIn/>}/>
          <Route  path='signup' element={<SignUp/>}/>
          <Route path='dashboard' element={<Home/>}>
            <Route path='users' element={<UsersPage/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
            <Route path='app'  element={<AppPage/>}/>
            <Route index  element={<Navigate to={'app'}/>}/>
            <Route path='analytics' element={<AnalyticsPage/>}/>
            <Route path='products' element={<ProductsPage/>}/>
            <Route path='commerce' element={<CommercePage/>}/>
            <Route path='banking' element={<AnalyticsPage/>}/>
            <Route path='booking' element={<CommercePage/>}/>
            <Route path='file' element={<AnalyticsPage/>}/>
            <Route path='user' element={<AnalyticsPage/>}/>
            <Route path='invoice' element={<AnalyticsPage/>}/>
            <Route path='blog' element={<AppPage/>}/>
            <Route path='filemanager' element={<CommercePage/>}/>
            <Route path='orders' element={<AnalyticsPage/>}/>
            <Route path='health' element={<AnalyticsPage/>}/>
            <Route path='logs' element={<CommercePage/>}/>
            <Route path='settings' element={<AppPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
